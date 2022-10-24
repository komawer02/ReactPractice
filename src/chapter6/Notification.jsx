import React from "react";
import "./notification.css";
class Notification extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){ console.log(`${this.props.id} componentDidMount() called.`);}
    componentDidUpdate() { console.log(`${this.props.id} componentDidUpdate() called.`);}
    componentWillUnmount() { console.log(`${this.props.id} componentWillUnmount() called.`);}

    render(){
        return(
            <div id="wrapper">
                <span id="messageText"> {this.props.message}</span>

            </div>
        )
    }
}


export default Notification;