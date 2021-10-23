import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';
import "../App.css";

import CardDeck from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Table from 'react-bootstrap/Table'

function Beranda() {
    const [latest, setLatest] = useState([]);
    const [results, setResults] = useState([""]);

    useEffect(() => {
        axios.all([
            axios.get("https://corona.lmao.ninja/v3/covid-19/all"),
            axios.get("https://corona.lmao.ninja/v3/covid-19/countries")
        ])
        
        .then(resArr => {
            setLatest(resArr[0].data);
            setResults(resArr[1].data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    const latestUpdated = moment().format('YYYY-MM-DD');

    const countries = results.map((data, idx) => {
        return(
            <tr key={idx}>
                <td>{idx+1}</td>
                <td>{data.country}</td>
                <td>{data.cases}</td>
                <td>{data.todayCases}</td>
                <td>{data.active}</td>
                <td>{data.recovered}</td>
                <td>{data.todayRecovered}</td>
                <td>{data.deaths}</td>
                <td>{data.todayDeaths}</td>
            </tr>
        )
    })
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
            <Card bg="primary" text={"white"} style={{margin:"20px"}}>
                <Card.Header as="h5">Data Kasus Covid-19 Seluruh Dunia</Card.Header>
            </Card>
            <Table striped bordered hover size="sm" className="align-items-center" style={{margin:"20px", width:"1300px"}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Negara</th>
                        <th>Total Terkonfirmasi</th>
                        <th>Penambahan Kasus</th>
                        <th>Kasus Aktif</th>
                        <th>Total Kesembuhan</th>
                        <th>Penambahan Kesembuhan</th>
                        <th>Total Kematian</th>
                        <th>Penambahan Kematian</th>
                    </tr>
                </thead>
                <tbody>
                    {countries}
                </tbody>
            </Table>
        </div>
    )
}

export default Beranda;
