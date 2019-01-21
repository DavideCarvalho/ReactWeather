import React, { Component, FormEvent } from "react";

interface IWeatherFormProps {
  handleSearch: ({ location }: { location: string }) => void
}

interface IWeatherFormState {
  location: string,
}

export class WeatherForm extends Component<IWeatherFormProps, IWeatherFormState> {

  constructor(props: IWeatherFormProps) {
    super(props)
    this.state = {
      location: '',
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.changeLocationState = this.changeLocationState.bind(this);
  }

  onFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (this.state.location) {
      this.props.handleSearch({ location: this.state.location });
    }
  }

  changeLocationState(event: FormEvent<HTMLInputElement>) {
    this.setState({
      location: (event.target as HTMLInputElement).value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            value={this.state.location}
            onChange={this.changeLocationState}
            placeholder="Search weather by city"
          />
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
  );
  }
}