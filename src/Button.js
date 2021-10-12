import React from "react";

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bgColor: "#94f6ff" };
    }
    
    render() {
        return (
            <button>{this.props.text}</button>
        );
    }
}