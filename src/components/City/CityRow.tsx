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
      <td className="flex justify-between items-center p-2 border-none">
        <span className="flex flex-col text-left">
          <span className="font-bold text-lg">{this.state.city.name}</span>
          <span className="text-sm text-gray-400">{`${this.state.city.country}${'subcountry' in this.state.city ? ' -' +
            ' ' + this.state.city.subcountry: ''}`}</span>
        </span>
        <a href={`https://www.geonames.org/${this.state.city.geonameid}`} target="_blank">View in Geonames 	&#8594;</a>
      </td>
    )
  }
}