import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const Account = () => {
    const [account, setAccount] = useState(null)
    const [userInfo, setUserInfo] = useState(null)
    const [listings, setListings] = useState(null)

    const params = useParams()





    const currentToken = localStorage.getItem('token')


    // https://instrument-swap-backend.herokuapp.com/users/62a240ccb6249c0c99b79d6d

    const URL = 'https://instrument-swap-backend.herokuapp.com/users/62a240ccb6249c0c99b79d6d'
    const getAccount = async () => {
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'Authorization': "Bearer " + currentToken
        }
        })
        const data = await response.json()
        setAccount(data)
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

    const getListings = async () => {
        const response = await fetch('https://instrument-swap-backend.herokuapp.com/listings')
        const data = await response.json()
        setListings(data)
        console.log(data)
    };



    useEffect(() => {
        // eslint-disable-next-line
        getAccount()
        // eslint-disable-next-line
        getInfo()
        // eslint-disable-next-line
        getListings()
        
    }, [])
    

    const loaded = () => {
        return (
            <div className="account-container">
                {userInfo.map((info, key) => {
                    if (info.user_id === params.id) {
                        console.log(account)
                        return (
                            <div className="account-info-box" key={key}>
                                <h2>{info.first_name} {info.last_name}</h2>
                                <h3>Location: {info.location}</h3>
                                <br />
                                <h3>{info.first_name}'s Listings</h3>
                            </div>
                        )
                    } 
                    return null
                })}
                {listings.map((listing, key) => {
                    if (listing.user === params.id) {
                        return (
                        <div  className="listing" key={key} >
                            <Card className='mb-3' style={ {color: "black"} }>
                                <Card.Body>
                                    <Link style={ {color: "#3617ff"} } to={`/listing/${listing._id}`} >
                                        <h2>{listing.title}</h2>
                                    </Link>
                                    <img className="listing-image" src={listing.image} alt="listing image" />

                                </Card.Body>
                            </Card>
                        </div>
                        )
                    }
                    return null
                })}
            </div>
        )

    }

    const loading = () => {
        return (
            <h2>loading...</h2>
        )
    }

    return account && userInfo ? loaded() : loading()
}


export default Account