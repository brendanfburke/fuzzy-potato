import React from "react";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import Nav from "../components/Nav";

const Listing = () => {

    const params = useParams()
    const [listing, setListing] = useState(null)
    const URL = `https://instrument-swap-backend.herokuapp.com/listings/${params.id}`

    const getListing = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setListing(data)
        console.log(data)
    };
    useEffect(() => {
        getListing()
        
    }, [])


    const loaded = () => {
        
             
        return (
            <div  className="listing" >
                <Card className='mb-3' style={ {color: "black"} }>
                    <Card.Body>
                        <h2>{listing.title}</h2>
                        <img className="listing-image" src={listing.image} alt="listing image" />
                        <p>{listing.description}</p>

                    </Card.Body>
                </Card>
            </div>
        )
    }

    const loading = () => {
        return <p>loading...</p>
    }

    return listing ? loaded() : loading()
}

export default Listing