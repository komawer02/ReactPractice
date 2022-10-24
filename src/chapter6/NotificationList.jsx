import React from "react";

import Notification from "./Notification";
import {reservedNotifications} from "./reservedNotification.js";
var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);
        this.state = {notification: [],
        }
    }
    componentWillUnmount(){
        if(timer){ clearInterval(timer);}
    }
    componentDidMount(){
        const {notifications} = this.state;
        timer = setInterval(()=>{
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications:notifications,
                })

            }
            else{
                this.setState({notification:[],})
                clearInterval(timer);
            }
        }, 1500)
    }
    render(){
        return(
            <div>
                {this.state.notifications.map((notification)=>{
                    return(
                        <Notification
                            key={notification.id}
                            id={notification.id}
                            message={notification.message}

                            />
                    )
                })}
            </div>
        )
    }
}


export default NotificationList;