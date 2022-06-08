import React from "react";
import { useState, useEffect } from "react";

const NewListing = () => {

    const [listings, setListings] = useState(null)
    const URL = 'https://instrument-swap-backend.herokuapp.com/listings'

    const [newForm, setNewForm] = useState({
        title: '',
        description: '',
        image: '',
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
        })
    }

    const getListings = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setListings(data)
        console.log(data)
    };
    useEffect(() => {
        getListings()
        
    }, [])

    const createListing = async (listing) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
                body: JSON.stringify(listing),
        });
        getListings();
    };

    


    return (
        <section>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newForm.title}
                name="title"
                placeholder="name"
                onChange={handleChange}
            />
            <input
                type="text"
                value={newForm.description}
                name="description"
                placeholder="title"
                onChange={handleChange}
            />
            <input
                type="text"
                value={newForm.image}
                name="image"
                placeholder="image URL"
                onChange={handleChange}
            />
            <input type="submit" value="Create Listing" />
        </form>
        {/* {listings ? loaded() : loading()} */}
    </section>
    )
}

export default NewListing