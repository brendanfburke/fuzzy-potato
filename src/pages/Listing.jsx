import React from "react";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import{ CopyToClipboard }from 'react-copy-to-clipboard'


const Listing = () => {

    const params = useParams()
    const [listing, setListing] = useState(null)
    const [userInfo, setUserInfo] = useState(null)
    const URL = `https://instrument-swap-backend.herokuapp.com/listings/${params.id}`
    const navigate = useNavigate()


    const currentToken = localStorage.getItem('token')

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

    const getInfo = async () => {
        const response = await fetch(`https://instrument-swap-backend.herokuapp.com/account/fgdho`, {
            method: 'GET',
            headers: {
                'Authorization': "Bearer " + currentToken
        }
        })
        const data = await response.json()
        setUserInfo(data)
        console.log(data)
    }

    useEffect(() => {
        getListing()
        getInfo()
    }, [])

    const deleteListing = async () => {
        const response = await fetch(URL, {
            method: 'DELETE',
        })
        goHome()
    };

    const thisUser = () => {
    }
    
    
    
    
    
    const loaded = () => {
        
        
        return (
            <div className="listing-page">
                
                {userInfo.map((user, key) => {
                    if (user.user_id === listing.user) {
                        return (
                            <div className="user-info">
                                <Link to={`/account/${user.user_id}`} >
                                    <h2>{user.first_name}</h2>
                                </Link>
                                <CopyToClipboard text={user.email_address}>
                                <p>Contact seller: <button>Click to copy email</button></p>
                                
                                </CopyToClipboard>
                            </div>
                        )
                    }
                })}
                <div  className="listing" >
                    <Card className='mb-3 listing-card' style={ {color: "black"} }>
                        <Card.Body>
                            <h2>{listing.title}</h2>
                            <img className="listing-image" src={listing.image} alt="listing image" />
                            <p>{listing.description}</p>
                            <button onClick={deleteListing}>Delete Listing</button>
                            <button onClick={goUpdate} >Update </button>

                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }

    const loading = () => {
        return <p>loading...</p>
    }

    return listing && userInfo ? loaded() : loading()
}

export default Listing