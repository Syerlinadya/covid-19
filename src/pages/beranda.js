import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';
import "../App.css";

import CardDeck from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

function Beranda() {
    const [latest, setLatest] = useState([]);

    useEffect(() => {
        axios.get("https://corona.lmao.ninja/v3/covid-19/countries")
        
        .then(resArr => {
            setLatest(resArr.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    const latestUpdated = moment().format('YYYY-MM-DD');
    return (
        <div>
            <CardDeck>
                <Card bg="secondary" text="white" className="text-center" style={{margin: "20px"}}>
                    <Card.Body>
                    <Card.Title>Terkonfirmasi</Card.Title>
                    <Card.Text>
                        {latest.cases}
                    </Card.Text>
                    <Card.Text>
                        +{latest.todayCases} kasus
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small>Update terakhir: {latestUpdated} </small>
                    </Card.Footer>
                </Card>
                <Card bg="success" text={"white"} className="text-center" style={{margin: "20px"}}>
                    <Card.Body>
                    <Card.Title>Sembuh</Card.Title>
                    <Card.Text>
                        {latest.recovered}
                    </Card.Text>
                    <Card.Text>
                        +{latest.todayRecovered} kasus sembuh
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small>Terakhir diperbarui {latestUpdated} </small>
                    </Card.Footer>
                </Card>
                <Card bg="danger" text={"white"} className="text-center" style={{margin: "20px"}}>
                    <Card.Body>
                    <Card.Title>Meninggal</Card.Title>
                    <Card.Text>
                        {latest.deaths}
                    </Card.Text>
                    <Card.Text>
                        +{latest.todayDeaths } kasus meninggal
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small>Update terakhir: {latestUpdated} </small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    )
}

export default Beranda;
