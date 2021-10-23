import './App.css';
import React from "react";
import Profil from './Profil.js';
import Button from './Button';
import Post from "./Post.js";

var profiles = [
  {
    firstName: "Jeanne",
    lastName: "Martin",
    birthday: "11 mars 1982",
    likes: 12,
    src: "https://img.icons8.com/dusk/128/000000/circled-user-female-skin-type-1-2.png"
  },
  {
    firstName: "Martine",
    lastName: "Dubois",
    birthday: "23 mai 1975",
    likes: 3,
    src: "https://img.icons8.com/dusk/128/000000/circled-user-female-skin-type-6.png"
  },
  {
    firstName: "Claude",
    lastName: "Besnet",
    birthday: "12 juillet 1993",
    likes: 5,
    src: "https://img.icons8.com/dusk/128/000000/circled-user-male-skin-type-3.png"
  }
]

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: profiles[0].firstName,
      lastName: profiles[0].lastName,
      birthday: profiles[0].birthday,
      likes: profiles[0].likes,
      src: profiles[0].src,
      current: 0
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
        <div className="row justify-content-center">
          <Profil
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            birthday={this.state.birthday}
            src={this.state.src}
          />
          <Post
            lastName={this.state.lastName}
            onClick={() => this.oneMoreLike()}
            likes={profiles[this.state.current].likes}
          />
        </div>
      </div>
    );
  }

  switchProfile(i) {
    this.setState({ firstName: profiles[i].firstName });
    this.setState({ lastName: profiles[i].lastName });
    this.setState({ birthday: profiles[i].birthday });
    this.setState({ likes: profiles[i].likes });
    this.setState({ src: profiles[i].src });
    this.setState({ current: i });
  }

  oneMoreLike() {
    profiles[this.state.current].likes++;
    this.setState({ likes: profiles[this.state.current].likes });
  }
}
