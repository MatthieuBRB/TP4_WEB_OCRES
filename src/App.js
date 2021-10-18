import './App.css';
import React from "react";
import Profil from './Profil.js';
import Button from './Button';

const list = [
  ["Jeanne", "Martin", "11 mars 1982"],
  ["Martine", "Dubois", "23 mai 1975"],
  ["Claude", "Besnet", "12 juillet 1993"]
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: list[0][0],
      lastName: list[0][1],
      birthday: list[0][2]
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-end">
          <Button
            className="col-2 offset-md-1 profile-button"
            text="Jeanne"
            onClick={() => this.switchProfile(0)}
          />
          <Button
            className="col-2 offset-md-1 profile-button"
            text="Martine"
            onClick={() => this.switchProfile(1)}
          />
          <Button
            className="col-2 offset-md-1 profile-button"
            text="Claude"
            onClick={() => this.switchProfile(2)}
          />
        </div>
          <Profil
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            birthday={this.state.birthday}
          />
      </div>
    );
  }

  switchProfile(i) {
    this.setState({ firstName: list[i][0] });
    this.setState({ lastName: list[i][1] });
    this.setState({ birthday: list[i][2] });
  }
}
