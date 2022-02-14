import "./Table.css";
import React, {useContext, useEffect} from 'react';
import { CityRow } from "../City/CityRow";
import {ActionType, Context, StoreContext} from '../../store';
import {City} from '../../types/city.def';

export const Table = () => {
  // @ts-ignore
  const { store, dispatch }: StoreContext = useContext(Context);

  useEffect(() => {
    fetch(import.meta.env.VITE_CITIES_URL)
      .then((response) => response.json())
      .then((response) => dispatch({ type: ActionType.SetCities, payload: response }));
  }, []);

  useEffect(() => {
    let url = import.meta.env.VITE_CITIES_URL;

    if (!!store.country) {
      url = `${url}?country=${encodeURIComponent(store.country.name)}`;
    }

    dispatch({ type: ActionType.ResetCities }); // Reset cities to avoid strange behavior when changing country
    fetch(url)
      .then((response) => response.json())
      .then((response) => dispatch({ type: ActionType.SetCities, payload: response }))
  }, [store.country]);

  return (
    <div id="cities-table-wrapper">
      <table>
        <thead>
        <tr>
          <th>City</th>
        </tr>
        </thead>
        <tbody>
        { store.cities?.map((city: City, index: number) => (
          <tr key={index}>
            <CityRow city={city} />
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};
