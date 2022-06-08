import React from "react";
import { useState, useEffect } from "react";

const NewAccount = () => {
    const [account, setAccount] = useState(null)
    const URL = 'https://instrument-swap-backend.herokuapp.com/account'

    const [newForm, setNewForm] = useState({
        user_id: '',
        first_name: '',
        last_name: '',
        primary_instrument: '',
        gear_interests: '',
        wish_list: '',
        location: '',
        email_address: ''
    })

    const handleChange = (e) => {
        setNewForm({...newForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createAccount(newForm);
        setNewForm({
            user_id: '',
            first_name: '',
            last_name: '',
            primary_instrument: '',
            gear_interests: '',
            wish_list: '',
            location: '',
            email_address: ''
        })
    }

    const getAccounts = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setAccount(data)
        console.log(data)
    };
    useEffect(() => {
        getAccounts()
        
    }, [])

    const createAccount = async (listing) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
                body: JSON.stringify(listing),
        });
        getAccounts();
    };

    


    return (
        <section>
        <form onSubmit={handleSubmit} className='new-account-form'>
            <label htmlFor="user_id">User Id</label>
            <input
                type="text"
                value={newForm.user_id}
                name="user_id"
                placeholder="user id"
                onChange={handleChange}
            />
            <label htmlFor="first_name">First Name</label>
            <input
                type="text"
                value={newForm.first_name}
                name="first_name"
                placeholder="Ex: George"
                onChange={handleChange}
            />
            <label htmlFor="last_name">Last Name</label>
            <input
                type="text"
                value={newForm.last_name}
                name="last_name"
                placeholder="Ex: Harrison"
                onChange={handleChange}
            />
            <label htmlFor="primary_instrument">Primary Instrument</label>
            <input
                type="text"
                value={newForm.primary_instrument}
                name="primary_instrument"
                placeholder="Ex: Guitar"
                onChange={handleChange}
            />
            <label htmlFor="gear_interests">Gear Interests</label>
            <input
                type="text"
                value={newForm.gear_interests}
                name="gear_interests"
                placeholder="Ex: Guitar Pedals"
                onChange={handleChange}
            />
            <label htmlFor="wish_list">Wish List</label>
            <input
                type="text"
                value={newForm.wish_list}
                name="wish_list"
                placeholder="Ex: Vintage Banjo"
                onChange={handleChange}
            />
            <label htmlFor="location">Location</label>
            <input
                type="text"
                value={newForm.location}
                name="location"
                placeholder="Ex: Boston, MA"
                onChange={handleChange}
            />
            <label htmlFor="email_address">Email Address</label>
            <input
                type="text"
                value={newForm.email_address}
                name="email_address"
                placeholder="Ex: me@you.com"
                onChange={handleChange}
            />
            <input type="submit" value="Create Listing" />
        </form>
        {/* {listings ? loaded() : loading()} */}
    </section>
    )
}

export default NewAccount