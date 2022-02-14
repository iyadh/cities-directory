import "./Sidebar.css";
import {useContext, useEffect} from 'react';
import {ActionType, Context} from '../../store';

type Country = {
  name: string;
  count: string;
}

export const Sidebar = () => {
  const { store, dispatch } = useContext(Context);

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
      <h2 className="font-black text-3xl mb-4">Cities App</h2>
      <div>
        <p className="my-4">Filter by country:</p>
        <select name="" id="" value={store.country ? store.country.name : ''} onChange={handleCountryChange} className="w-full bg-gray-100 p-2 mb-3 rounded-md">
          <option value="">Select a country</option>
          {store.countries.map((country: Country) => (
            <option key={country.name} value={country.name}>{country.name} ({country.count})</option>
          ))}
        </select>
        <button disabled={!store.country} onClick={resetCountry} className="w-full bg-gray-100 p-2 rounded-md text-base uppercase font-bold tracking-widest hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-200 disabled:cursor-not-allowed">All Cities</button>
      </div>
    </div>
  );
};
