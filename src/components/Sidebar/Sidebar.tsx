import "./Sidebar.css";
import {useEffect, useState} from 'react';

type Country = {
  name: string;
  count: string;
}

export const Sidebar = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/countries")
      .then((response) => response.json())
      .then(setCountries);
  }, []);

  return (
    <div id="sidebar">
      <h2>Cities App</h2>
      <div>
        <ul className="list-none">
          {countries.map((country) => (
            <li key={country.name}>
              {country.name} ({country.count})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
