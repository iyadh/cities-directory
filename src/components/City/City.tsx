import React from 'react';
import {CityProps} from '../../types/city.def';

export class City extends React.Component {
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
      <td>
        <a href={`https://www.geonames.org/${this.state.city.geonameid}`} target="_blank">{this.state.city.name}</a>
      </td>
    )
  }
}