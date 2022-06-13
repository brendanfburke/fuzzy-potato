import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";

const NewAccount = () => {
    const [account, setAccount] = useState(null)
    const URL = 'https://instrument-swap-backend.herokuapp.com/account'

    const accountId = useRef()

    const navigate = useNavigate()

    const goHome = () => {
        let path = '/'
        navigate(path)
    }

    
    const currentToken = localStorage.getItem('token')
    
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
        goHome()
    }
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
        newForm.user_id = data._id
    };
    
    useEffect(() => {
        getAccount()
        // eslint-disable-next-line
    }, [])
    
    const createAccount = async (listing) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                'Authorization': "Bearer " + currentToken,
            },
            body: JSON.stringify(listing),
        });
    };
    
    
    const loaded = () => {

        // newForm.user_id = account._id

        // accountId = account._id

        accountId.current = account._id

        return (
            <section>
            <form onSubmit={handleSubmit} className='new-account-form'>
                <input
                    type="hidden"
                    value={newForm.user_id}
                    ref={accountId}
                    name="user_id"
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
                <input type="submit" value="Create Account" />
            </form>
        </section>
        )
    }

    const loading = () => {
        return (
            <h2>loading ...</h2>
        )
    }

    return account ? loaded() : loading()
}

export default NewAccount