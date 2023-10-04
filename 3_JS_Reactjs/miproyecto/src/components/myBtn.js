import { Component } from "react";

class MyBtn extends Component{

    actionClick = () => {
        console.log(this.props.title);
    }

    render(){
        var title = this.props.title;

        return(
            <button style={{color: "green", background: "black"}} onClick={this.actionClick}> {title} </button>
        );
    }
}

export default MyBtn;