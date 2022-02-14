import {createContext} from 'react';
import {Country} from '../types/country.def';
import {City} from '../types/city.def';

export enum ActionType {
  SetCountry = 'SET_COUNTRY',
  ResetCountry = 'RESET_COUNTRY',
  SetCountries = 'SET_COUNTRIES',
  SetCities = 'SET_CITIES',
  ResetCities = 'RESET_CITIES',
}

export interface Action {
  type: ActionType;
  payload?: any;
}

export const state = {
  country: null as Country | null,
  countries: new Array<Country>(),
  cities: new Array<City>()
}

export const reducer = (state, action: Action) => {
  switch (action.type) {
    case ActionType.SetCountry:
      return {
        ...state,
        country: action.payload
      }
    case ActionType.ResetCountry:
      return {
        ...state,
        country: null
      }
    case ActionType.SetCountries:
      return {
        ...state,
        countries: action.payload
      }
    case ActionType.SetCities:
      return {
        ...state,
        cities: action.payload
      }
    case ActionType.ResetCities:
      return {
        ...state,
        cities: []
      }
    default:
      return state
  }
}

export const Context = createContext();