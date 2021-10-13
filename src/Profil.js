import React from "react";
import Button from './Button.js';
import Post from "./Post.js";

export default class Profil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: "#94f6ff"
        };
    }

    render() {
        return (
            <div>
                <div className="profil-page" style={{ backgroundColor: this.state.bgColor }}>
                    <div>{this.props.firstName}</div>
                    <div>{this.props.lastName}</div>
                    <div>{this.props.birthday}</div>
                    <Button
                        text="Change style"
                        onClick={() => this.changeStyle()}
                    />
                </div>
                <Post />
            </div>
        );
    }


    changeStyle() {
        if (this.state.bgColor === "#94f6ff") {
            this.setState({ bgColor: "#ffcd42" });
        }
        if (this.state.bgColor === "#ffcd42") {
            this.setState({ bgColor: "#7ade7f" });
        }
        if (this.state.bgColor === "#7ade7f") {
            this.setState({ bgColor: "#94f6ff" });
        }

    }
}