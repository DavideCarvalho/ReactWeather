import React, { Component, FormEvent } from 'react';
import { WeatherMessage } from "./WeatherMessage";
import { getTemp }  from '../api/openWeatherMap';
import { RouteComponentProps } from 'react-router';
import queryString from 'query-string';
import { WeatherForm } from './WeatherForm';

interface IWeatherProps extends RouteComponentProps {

}

interface IWeatherState {
  isLoading: boolean,
  errorMessage: string,
  location: string,
  temp: string
}

export class Weather extends Component<IWeatherProps, IWeatherState> {
  constructor(props: IWeatherProps) {
    super(props);

    this.state = {
      isLoading: false,
      errorMessage: '',
      location: '',
      temp: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
  }

  handleSearch({ location }: {location: string}) {
    this.setState({
      isLoading: true,
      errorMessage: '',
      location: '',
      temp: ''
    });
    getTemp({location})
      .then((temp) => {
        this.setState({
          isLoading: false,
          temp,
          location,
        })
      })
      .catch((err: Error) => {
        this.setState({
          isLoading: false,
          errorMessage: err.message,
        })
      });
  }

  updateLocation({ query }: { query: string }) {
    const values = queryString.parse(query);
    if (values.location) {
      this.handleSearch({ location: values.location as string });
    }
  }

  componentDidMount() {
    this.updateLocation({ query: this.props.location.search });
  }

  componentWillReceiveProps(props: IWeatherProps) {
    this.updateLocation({ query: props.location.search });
  }

  renderMessage() {
    const { temp, location } = this.state;
    if (this.state.isLoading) {
      return <h3 className="text-center">Fetching weather...</h3>;
    } else if (temp && location) {
      return <WeatherMessage temp={temp} location={location} />;
    }
  }

  renderError() {
  }

  render() {
    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm handleSearch={this.handleSearch} />
        {this.renderMessage()}
      </div>
    )
  }
}