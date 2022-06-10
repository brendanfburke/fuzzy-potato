import React from "react";
import { useParams } from "react-router";

const ImageUpload = () => {
    const params = useParams()

    return (
        <div className="image-upload-container">
            <p>{params.id}</p>
            <form action="">
                <input type="file" />
            </form>
        </div>
    )
}

export default ImageUpload