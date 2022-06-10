import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import Axios from "axios";

const ImageUpload = () => {
    const params = useParams()

    const URL = 'https://instrument-swap-backend.herokuapp.com/single'

    const [newForm, setNewForm] = useState(null)

    const handleChange = (e) => {
        setNewForm(e.target.file[0])
        console.log(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        imageSubmit(newForm);
        setNewForm({
            username: '',
            password: '',
        })
    }



    const imageSubmit = async () => {
        await Axios.post(URL, newForm, {mode: 'cors'}).then((response) => {
            console.log(response)
            // if (response) {
            // } else {
            //     warningMessage = 'incorrect username or password, please try again or register a new account'
            // }
        })
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}  className='new-account-form'>
                <input type="file" onChange={handleChange} /> 
                <button>Upload</button>
            </form>

        </div>
    )

    // return (
    //     <div className="image-upload-container">
    //         <p>{params.id}</p>
    //         <form action="">
    //             <input type="file" />
    //         </form>
    //     </div>
    // )
}

export default ImageUpload