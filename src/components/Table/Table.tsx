import "./Table.css";
import { useEffect, useState } from "react";
import {CityProps} from '../../types/city.def';
import { City } from "../City/City";

export const Table = () => {
  const [cities, setCities] = useState<CityProps[] | null>(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_CITIES_URL)
      .then((response) => response.json())
      .then(setCities);
  }, []);

  return (
    <div id="cities-table-wrapper">
      <table>
        <thead>
        <tr>
          <th>City</th>
        </tr>
        </thead>
        <tbody>
        {cities?.map((city, index) => (
          <tr key={index}>
            <City city={city} />
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};
