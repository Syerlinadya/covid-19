import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import moment from 'moment';

import CardDeck from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

import ReactPaginate from "react-paginate";

function Beranda() {
    const [latest, setLatest] = useState([]);
    const [results, setResults] = useState([""]);
    const [searchCountries, setSearchCountries] = useState("");
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        axios
        .all([
            axios.get("https://corona.lmao.ninja/v2/all"),
            axios.get("https://corona.lmao.ninja/v2/countries"),
        ])
        .then((responseArr) => {
            setLatest(responseArr[0].data);
            setResults(responseArr[1].data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    const latestUpdated = moment().format('YYYY-MM-DD');
    const filterCountries = results.filter((item) => {
        return searchCountries !== ""
          ? item.country.toLowerCase().includes(searchCountries.toLowerCase())
          : item;
    });

    const countriesPerPage = 15;
    const pagesVisited = pageNumber * countriesPerPage;
    const pageCount = Math.ceil(filterCountries.length / countriesPerPage );

    const displayCountries = filterCountries
        .slice(pagesVisited, pagesVisited + countriesPerPage)
        .map((data, idx) => {
            return(
                <tr key={idx}>
                    <td>{idx+1}</td>
                    <td>{data.country}</td>
                    <td>{data.cases}
                        <p><strong>Kasus aktif:</strong> {data.active}</p>
                        <p><strong>Penambahan kasus:</strong> +{data.todayCases}</p>
                    </td>
                    <td>{data.recovered}
                        <p><strong>Kasus Sembuh:</strong> +{data.todayRecovered}</p>
                    </td>
                    <td>{data.deaths}
                        <p><strong>Kasus Meninggal:</strong> +{data.todayDeaths}</p>
                    </td>
                </tr>
            )
        });
    
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }; 
    return (
        <div>
            <div className="sebaran">
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
    
            <div className="negara">
                <h3 style={{margin:"20px", textAlign:"center"}}>Data Kasus Covid-19 Seluruh Dunia</h3>
                <Form>
                    <Form.Group className="search md-4" controlId="formGroupSearch" style={{margin:"20px"}}>
                    <Form.Control
                        bg="dark"
                        type="text"
                        placeholder="Cari negara"
                        onChange={(e) => setSearchCountries(e.target.value)}
                    />
                    </Form.Group>
                </Form>

                <Table responsive="sm" style={{margin:"20px", width:"1300px"}}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Negara</th>
                            <th>Kasus</th>
                            <th>Sembuh</th>
                            <th>Meninggal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayCountries}
                    </tbody>
                </Table>
                <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={"paginationBtn"}
                            previousLinkClassName={"previousBtn"}
                            nextLinkClassName={"nextBtn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                        />
            </div>
        </div>
    )
}

export default Beranda;
