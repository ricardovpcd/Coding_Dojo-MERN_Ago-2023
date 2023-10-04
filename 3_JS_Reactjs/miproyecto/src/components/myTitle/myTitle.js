import { Component } from "react";
import "./myTitle.css";

class MyTitle extends Component{
    render(){

        var cabec = this.props.cabecera;

        return(<h2 className="cabecera"> Formlario de {cabec} </h2>);
    }
}

export default MyTitle;