import React from 'react';

export class CityRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: {}
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