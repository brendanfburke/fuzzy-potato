import React from "react";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

const Listing = () => {

    const params = useParams()
    const [listing, setListing] = useState(null)
    const URL = `https://instrument-swap-backend.herokuapp.com/listings/${params.id}`
    const navigate = useNavigate()

    const goHome = () => {
        let path = '/'
        navigate(path)
    }
    const goUpdate = () => {
        let path = `/listing/${params.id}/update`
        navigate(path)
    }

    const getListing = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setListing(data)
        console.log(data)
    };
    useEffect(() => {
        getListing()
        
    }, [])

    const deleteListing = async () => {
        const response = await fetch(URL, {
            method: 'DELETE',
        })
        goHome()
    };



    // const updateListing = async (listing) => {
    //     const response = await fetch(`URL/${update}`, {
    //         method: 'PUT',
    //         headers: {
    //             "Content-Type": "application/json",
    //             'Authorization': "Bearer " + currentToken,
    //         },
    //         body: JSON.stringify(listing),
    //     })
    //     goHome()
    // };
    

    const loaded = () => {
        
             
        return (
            <div  className="listing" >
                <Card className='mb-3' style={ {color: "black"} }>
                    <Card.Body>
                        <h2>{listing.title}</h2>
                        <img className="listing-image" src={listing.image} alt="listing image" />
                        <p>{listing.description}</p>
                        <button onClick={deleteListing}>Delete Listing</button>
                        <button onClick={goUpdate} >Update </button>

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