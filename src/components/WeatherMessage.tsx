import React, { Component } from 'react';

interface IWeatherMessageProps {
  temp: string,
  location: string
};

export const WeatherMessage = ({ temp, location }: IWeatherMessageProps) => (
  <h3 className="text-center">It's it {temp}C° in {location}.</h3>
)