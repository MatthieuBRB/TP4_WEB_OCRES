import React from "react";
import Button from './Button.js';

export default class Profil extends React.Component {
    render() {
        return(
            <div className="profil-page">
                <Button 
                    text = "Change style"
                    onClick = {changeStyle()}
                />
            </div>
        );
    }

    
    changeStyle() {
        if (this.state.bgColor === "#94f6ff") {
            this.setState({ bgColor: "green" });
        }
        if (this.state.bgColor === "green") {
            this.setState({ bgColor: "blue" });
        }
        if (this.state.bgColor === "blue") {
            this.setState({ bgColor: "#94f6ff" });
        }

    }
}