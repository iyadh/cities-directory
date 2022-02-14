import React from 'react';
import {City} from '../../types/city.def';

interface Props {
  city: City;
}

interface State {
  city: City;
}

export class CityRow extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      city: props.city,
    };
  }

  componentDidMount() {
    this.setState({
      city: this.props.city
    });
  }

  render() {
    return (
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {this.state.city.name}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {`${this.state.city.country}${'subcountry' in this.state.city ? ' -' +
            ' ' + this.state.city.subcountry: ''}`}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a className="text-indigo-600 hover:text-indigo-900" href={`https://www.geonames.org/${this.state.city.geonameid}`} target="_blank">View in Geonames 	&#8594;</a>
        </td>
      </tr>

    )
  }
}