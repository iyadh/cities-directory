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
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              City
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Country
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          { store.cities?.map((city: City, index: number) => (
            <CityRow key={index} city={city} />
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
