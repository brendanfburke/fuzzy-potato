import React from "react";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const Home = () => {

    const [listings, setListings] = useState(null)
    const URL = 'https://instrument-swap-backend.herokuapp.com/listings'

    const getListings = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setListings(data)
        console.log(data)
    };
    useEffect(() => {
        getListings()
        
    }, [])


    const loaded = () => {
        return (
        <div className="listings-container">
            {listings.map((listing, key) => {
                console.log(listing.title)
                return (
                    <div className="listing" key={key} >
                        <Card style={ {color: "black"} }>
                            <Card.Body>
                                <h2>{listing.title}</h2>
                                <img className="listing-image" src={listing.image} alt="listing image" />
                                <p>{listing.description}</p>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </div>
        )
    }

    const loading = () => {
        return <p>loading...</p>
    }

    return listings ? loaded() : loading()
}

export default Home