import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

function Sebaran() {
    const [results, setResults] = useState([""]);
    const [searchCountries, setSearchCountries] = useState("");

    useEffect(() => {
        
        axios.get("https://corona.lmao.ninja/v3/covid-19/countries")
            .then(resArr => {
                setResults(resArr.data);
            })
            .catch(err => {
                console.log(err);
            });
        }, []);

    const filterCountries = results.filter((item) => {
        return searchCountries !== ""
          ? item.country.toLowerCase().includes(searchCountries.toLowerCase())
          : item;
    });

    const countries = filterCountries.map((data, idx) => {
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
            <div><h5 style={{margin:"20px", decoration: "underline"}}>Data Kasus Covid-19 Seluruh Dunia</h5></div>
            
            <Form>
                <Form.Group className="md-4" controlId="formGroupSearch" style={{margin:"20px"}}>
                <Form.Control
                    bg="dark"
                    type="text"
                    placeholder="Cari negara"
                    onChange={(e) => setSearchCountries(e.target.value)}
                />
                </Form.Group>
            </Form>

            <Table striped bordered hover size="sm" style={{margin:"20px", width:"1300px"}}>
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

export default Sebaran;
