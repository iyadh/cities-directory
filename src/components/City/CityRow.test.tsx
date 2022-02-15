import { render, screen } from "@testing-library/react";
import {CityRow} from './CityRow';
import {City} from '../../types/city.def';


describe('CityRow', () => {
  test('should render CityRow', () => {
    render(
      <table>
        <tbody>
          <CityRow city={{name: 'test'}}/>
        </tbody>
      </table>
    );
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('should render CityRow with a country name and a subcountry name', function () {
    render(
      <table>
        <tbody>
          <CityRow city={{name: 'test', country: 'Andorra', subcountry: 'Andorra la Vella'}}/>
        </tbody>
      </table>
    );
    expect(screen.getByText(/\bAndorra la Vella\b/i)).toBeInTheDocument();
  });

  test('url should have geonameid', function () {
    const city: City = {name: 'Andorra la Vella', country: 'Andorra', subcountry: 'Andorra la Vella' , geonameid: 3041563};
    render(
      <table>
        <tbody>
          <CityRow city={city}/>
        </tbody>
      </table>
    );
    expect(screen.getByRole('link')).toHaveAttribute('href', `https://www.geonames.org/${city.geonameid}`);
  });
});