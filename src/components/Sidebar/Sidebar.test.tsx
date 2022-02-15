import {queryByAttribute, render, } from '@testing-library/react';
import {Sidebar} from './Sidebar';
import React from 'react';
import {
  Context,
  State
} from '../../store';
import {Country} from '../../types/country.def';
import {City} from '../../types/city.def';

// @ts-ignore
const customRender = (ui: React.ReactElement, {providerProps, ...renderOptions}) => {
  return render(
    <Context.Provider {...providerProps}>{ui}</Context.Provider>,
    renderOptions
  );
};

test('Sidebar to be in the document', () => {
  const state: State = {
    country: null as Country | null,
    countries: new Array<Country>(),
    cities: new Array<City>()
  }
  const providerProps = {
    value: {
      store: state,
      dispatch: jest.fn()
    }
  };
  const fakeCountry = [
    {
      "name": "Andorra",
      "count": 2
    }
  ];
  // @ts-ignore
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeCountry),
    })
  );
  customRender(<Sidebar />, {providerProps});
  // @ts-ignore
  const sidebar = document.querySelector('#sidebar');
  expect(sidebar).toBeInTheDocument();
});