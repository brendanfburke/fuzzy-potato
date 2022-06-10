import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const NewListing = () => {

    let navigate = useNavigate()

    

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
        console.log(data[data.length-1]._id)
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
        let path = `/upload_image/${listings[listings.length-1]._id}`
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
            <input type="submit" value="Create Listing" />
        </form>
        {/* {listings ? loaded() : loading()} */}
    </section>
    )
}

export default NewListing