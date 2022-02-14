import "./Sidebar.css";
import React, {useContext, useEffect} from 'react';
import {ActionType, StoreContext, Context} from '../../store';

type Country = {
  name: string;
  count: string;
}

export const Sidebar = () => {
  // @ts-ignore
  const { store, dispatch }: StoreContext = useContext(Context);

  useEffect(() => {
    fetch(import.meta.env.VITE_COUNTRIES_URL)
      .then((response) => response.json())
      .then((response) => dispatch({type: ActionType.SetCountries, payload: response}))
  }, []);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = store.countries.find((country: Country) => country.name === event.target.value);
    dispatch({type: ActionType.SetCountry, payload: selectedCountry});
  }

  const resetCountry = () => {
    dispatch({type: ActionType.ResetCountry });
  }

  return (
    <div id="sidebar">
      <h2 className="font-black text-3xl pb-4 mb-4 border-b border-slate-300">Cities App</h2>
      <div>
        <label htmlFor="cities" className="my-4 block">Filter by country:</label>
        <select name="cities" id="cities"
                value={store.country ? store.country.name : ''}
                onChange={handleCountryChange}
                className="w-full bg-white border-2 border-slate-300 p-2 mb-3 rounded-md">
          <option value="">Select a country</option>
          {store.countries.map((country: Country) => (
            <option key={country.name} value={country.name}>{country.name} ({country.count})</option>
          ))}
        </select>
        <button disabled={!store.country}
                onClick={resetCountry}
                className="w-full bg-blue-300 text-blue-700 p-2 rounded-md text-base uppercase font-bold tracking-widest hover:bg-blue-400 disabled:bg-blue-100 disabled:text-blue-200 disabled:cursor-not-allowed">All Cities</button>
      </div>
    </div>
  );
};
