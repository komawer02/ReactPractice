import React from "react";
import "./TimeSale.css";

function getDeadline(endDate){
    let dead = new Date(endDate);
    let current= new Date();
    let deadline = dead.getTime() - current.getTime();
    let hour = Math.floor(deadline / (1000*60*60));
    let min = Math.floor((deadline % (1000*60*60))/(1000*60)/1000);
    let sec = Math.floor(((deadline % (1000 *60 *60)) % ( 1000 * 60))/1000);
    return hour.toString(10) + " : " + min.toString(10) + " : " + sec.toString(10);
}

function Card(props){
    return(
        <div className="card">
            <img src={props.img} className="cardimg" alt="product" />
            <div className="cardbody">
                <h2 className="cardtime">{props.time}</h2>
                <h2 className="cardtitle">{props.title}</h2>
                <p className="carddescription">{props.description}</p>
                <h3 className="cardprice">
                    <del style={{color:"gray"}}>{props.oldprice}</del> {props.price}
                </h3>
            </div>
        </div>
    )
}

function TimeSale(props){
    return(
        <div className="wrapper">
            <Card
                img="myfile.png"
                time ={getDeadline("2022-9-19 20:20:00")}
                title="시간한정 특가세일 1탄"
                description="갤럭시탭S8 Ultra 14.6 WiFi 128GB 최첨단 파워풀한 S펜, 멀티윈도우, 고성능!"
                oldprice="1,280,000원"
                price="589,000원"
                />
            <Card
            img= "myfile2.png"
            time={getDeadline("2022-9-19 23:00:00")}
            title="시간한정 특가세일 2탄"
            description="BS-BT101 블루투스헤드폰5.0 실감나는 풍부한 사운드"
            oldprice="350,000원"
            price="120,000원"
            
            />
        </div>
        
    )
}

export default TimeSale;