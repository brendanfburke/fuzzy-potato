import React from "react";
import { useState } from "react";

const ImageUpload = () => {


    const URL = 'https://instrument-swap-backend.herokuapp.com/single'

    const [newForm, setNewForm] = useState(null)

    const handleChange = (e) => {
        setNewForm(e.target.files[0])
        console.log(e.target.files[0])
    }
    const imageSubmit = async (file) => {
        const imageFetch = await fetch(URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json, text/plain, */*',
            },
            body: JSON.stringify(file)
        })
        const response = await imageFetch.json()
        console.log(response)
        // .then((response) => {
        //     console.log(response)
        // }).catch(error => {
        //     console.log(error)
        // }) 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(typeof(newForm))
        imageSubmit(newForm);
    }




    return (
        <div className="image_uploader">
            <form onSubmit={handleSubmit}  className='image-upload-form'>
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