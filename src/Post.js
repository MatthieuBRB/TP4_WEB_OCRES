import React from "react";
import Button from "./Button";

const posts = [
    "Mosquito City is home to the world’s largest captive colony of mosquitoes. @IfakaraHealth Institute is doing fascinating research there about mosquito behaviors and finding ways to outsmart them.",
    "Let me be clear, my friend. Warren beat me out for the DT position. Period. Not because I was injured, but because he was better. And today he’s in the @NFL HOF. And I’m not",
    "With COVID-19 cases reaching an all-time high this week, we've got to continue to do our part to protect one another. This pandemic is far from over and your actions can help save lives."
];

export default class Post extends React.Component {
    getPost(name) {
        if (name === "Martin") {
            return(posts[0]);
        }
        if (name === "Dubois") {
            return(posts[1]);
        }
        if (name === "Besnet") {
            return(posts[2]);
        }
    }

    render() {
        return (
            <div className="post col-10">
                <h5><b>Last Post</b></h5>
                <p>{this.getPost(this.props.lastName)}</p>
                <Button
                    className="like-button"
                    text="&#128077; C'est super !"
                    onClick={this.props.onClick}
                />
                <span>{this.props.likes} likes</span>
            </div>
        );
    }
}