import React, { Component } from 'react';
import CityList from './CityList';
import CityAdd from './CityAdd';


export default class App extends Component {

  constructor() {
    super();

    this.state = {
      data: [
        { city: 'Moscow', description: 'It is big sity.', id: 1 },
        { city: 'St. Petersburg', description: 'Second big sity in Russia.', id: 2 },
        { city: 'Perm', description: 'It is my city', id: 3 }
      ]
    }

    this.deleteCityItem = this.deleteCityItem.bind(this);
    this.addCity = this.addCity.bind(this);

    this.maxId = 4;
  }

  deleteCityItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);

      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

      return {
        data: newArr
      }
    });
  }

  addCity(name, description) {
    const newCity = {
      city: name,
      description: description,
      id: this.maxId++
    };

    this.setState(({ data }) => {
      const newArr = [...data, newCity];

      return {
        data: newArr
      }
    });
  }

  render() {

    const { data } = this.state;
    return (
      <>
        <CityList
          onDelete={this.deleteCityItem}
          citys={data} />

        <CityAdd
          onAdd={this.addCity} />
      </>
    );
  }
}