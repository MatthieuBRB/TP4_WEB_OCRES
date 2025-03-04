import React from "react";
import Button from './Button.js';

export default class Profil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: "#154d81"
        };
    }

    render() {
        return (
            <div className="profile-page col-10" style={{ backgroundColor: this.state.bgColor }}>
                <div className="container">
                    <div className="image row justify-content-center">
                        <img className="col-auto" src={this.props.src} alt="profile_picture" height="128" />
                    </div>
                    <div className="row">
                        <div className="col-6 profile-data"><b>Prénom :</b> {this.props.firstName}</div>
                        <div className="col-6 profile-data"><b>Nom :</b> {this.props.lastName}</div>
                        <div className="col-12 profile-data"><b>Date de naissance :</b> {this.props.birthday}</div>
                    </div>
                    <div className="row justify-content-end">
                        <Button
                            className="col-3 style-button"
                            text="Change style"
                            onClick={() => this.changeStyleRandomColor()}
                        />
                    </div>
                </div>
            </div>
        );
    }

    changeStyleRandomColor() {
        const value = "123456789ABCDEF";
        var color = "#";

        for (var i = 0; i < 6; i++) {
            var index = Math.random() * (15 - 1) + 1;
            color = color + value.charAt(index);
        }

        this.setState({ bgColor: color });
    }
}