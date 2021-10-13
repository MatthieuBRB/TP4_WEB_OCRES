import './App.css';
import React from "react";
import Profil from './Profil.js';
import Button from './Button';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Jeanne",
      lastName: "Martin",
      birthday: "11 mars 1982"
    }
  }

  render() {
    return (
      <div>
        <Button
          text="Jeanne"
          onClick={() => this.switchToJeanne()}
        />
        <Button
          text="Martine"
          onClick={() => this.switchToMartine()}
        />
        <Button
          text="Claude"
          onClick={() => this.switchToClaude()}
        />
        <Profil
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          birthday={this.state.birthday}
        />
      </div>
    );
  }

  switchToJeanne() {
    this.setState({ firstName: "Jeanne" });
    this.setState({ lastName: "Thomas" });
    this.setState({ birthday: "11 mars 1982" });
  }
  switchToMartine() {
    this.setState({ firstName: "Martine" });
    this.setState({ lastName: "Dubois" });
    this.setState({ birthday: "23 mai 1975" });
  }
  switchToClaude() {
    this.setState({ firstName: "Claude" });
    this.setState({ lastName: "Besnet" });
    this.setState({ birthday: "12 juillet 1993" });
  }
}
