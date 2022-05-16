import React, { useEffect, useState } from "react";
// import axios from "axios";
import "./css/style.css";

const Tempapp = () => {
    const [city, setCity] = useState();
    const [search, setSearch] = useState("Hapur");

    // const API = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=161c05337c68b7286d9c8780e2738cc6`;




    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=161c05337c68b7286d9c8780e2738cc6`;
            const response = await fetch(url);
            const data = await response.json();
            setCity(data.main);
        };
        fetchApi();
    }, [search]);

    return (
        <>
            <div>
                <div className="box">
                    <div className="inputData">
                        <input
                            type="search"
                            className="inputField"
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }}
                        />
                    </div>

                    {!city ? (
                        <p className="errorMsg">No Data Found</p>
                    ) : (
                        <div>
                            <div className="info">
                                <h2 className="location">
                                    <i className="fas fa-solid fa-street-view"></i>
                                    {search}
                                </h2>

                                <h1 className="temp">{city.temp} &#176;C</h1>
                                <h3 className="tempmin_max">
                                    Min: {city.temp_min}&#176;C | Max: {city.temp_max}&#176;C
                                </h3>
                            </div>
                            <div className="wave_one"></div>
                            <div className="wave_two"></div>
                            <div className="wave_three"></div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Tempapp;
