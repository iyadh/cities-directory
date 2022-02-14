import "./Sidebar.css";
import {useEffect, useState} from 'react';

type Country = {
  name: string;
  count: string;
}

export const Sidebar = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [country, setCountry] = useState<Country>({name: '', count: ''});

  useEffect(() => {
    fetch(import.meta.env.VITE_COUNTRIES_URL)
      .then((response) => response.json())
      .then(setCountries);
  }, []);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = countries.find(country => country.name === event.target.value);
    setCountry(selectedCountry);
  }

  const resetCountry = () => {
    setCountry({name: '', count: ''});
  }

  return (
    <div id="sidebar">
      <h2 className="font-black text-3xl mb-4">Cities App</h2>
      <div>
        <button onClick={resetCountry} className="w-full bg-gray-100 p-2 rounded-md text-base uppercase font-bold tracking-widest hover:bg-gray-200">All Cities</button>
        <p className="my-4">Filter by country:</p>
        <select name="" id="" value={country.name} onChange={handleCountryChange} className="w-full bg-gray-100 p-2 rounded-md">
          <option selected value="">Select a country</option>
          {countries.map((country) => (
            <option key={country.name} value={country.name}>{country.name} ({country.count})</option>
          ))}
        </select>
      </div>
    </div>
  );
};
