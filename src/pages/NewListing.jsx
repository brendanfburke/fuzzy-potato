import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const NewListing = () => {

    let navigate = useNavigate()

    
    // eslint-disable-next-line
    const [listings, setListings] = useState(null)
    const URL = 'https://instrument-swap-backend.herokuapp.com/listings/new'

    const [newForm, setNewForm] = useState({
        title: '',
        description: '',
        image: '',
        user: '',
    })

    const handleChange = (e) => {
        setNewForm({...newForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createListing(newForm);
        setNewForm({
            title: '',
            description: '',
            image: '',
            user: ''
        })
    }

    const getListings = async () => {
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'Authorization': "Bearer " + currentToken
            }
        })
        const data = await response.json()
        setListings(data)
        console.log(data)
        newForm.user = data._id
    };
    
    useEffect(() => {
        getListings()
        // eslint-disable-next-line
    }, [])

    const currentToken = localStorage.getItem('token')

    const createListing = async (listing) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                'Authorization': "Bearer " + currentToken,
            },
            body: JSON.stringify(listing),
        });
        getListings();
        let path = `/`
        navigate(path)
    };

    


    return (
        <section>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newForm.title}
                name="title"
                placeholder="title"
                onChange={handleChange}
            />
            <input
                type="text"
                value={newForm.description}
                name="description"
                placeholder="description"
                onChange={handleChange}
            />
            <input
                type="text"
                value={newForm.image}
                name="image"
                placeholder="image URL"
                onChange={handleChange}
            />
            <input
                type="hidden"
                value={newForm.user}
                name="user"
                placeholder="user id"
                onChange={handleChange}
            />
            <input type="submit" value="Create Listing" />
        </form>
        {/* {listings ? loaded() : loading()} */}
    </section>
    )
}

export default NewListing