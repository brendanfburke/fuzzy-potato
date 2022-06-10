import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom'

const Main = (props) => {


    
    const [listings, setListings] = useState(null)
    const URL = 'https://mern-walkthru.herokuapp.com/people'
    
    const getListings = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setListings(data)
    };
    useEffect(() => {
        getListings()
        
    }, [])
    
    const createListing = async (listing) => {
        // make post request to create people
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
                body: JSON.stringify(listing),
        });
        // update list of people
        getListings();
    };
    return (
        <div className="main-section">
            <Routes>
                <Route path='/' element={<People people={people} createPeople={createPeople}/>} />
                <Route path='/people/:id' element={<Show people={people}  />} />
            </Routes>
        </div>
    )
}

export default Main