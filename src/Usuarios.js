import React, { Component } from 'react';
import axios from 'axios'

export default class Usuarios extends Component {

  state = {
    usuarios: []
  }

  componentDidMount = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        this.setState({ usuarios: res.data });
      });
  }

  render() {
    return (
      <ul>
        {this.state.usuarios.map(item => (
          <li key={item.id}>
            {item.name} - {item.email}
          </li>
        ))}
      </ul>
    );
  }
}
