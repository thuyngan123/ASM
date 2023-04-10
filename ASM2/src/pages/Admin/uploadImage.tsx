import React, { useState } from 'react'
import axios from 'axios';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';


type Props = {}

const uploadImagePage = () => {
    const [image, setImage] = useState("");
    const uploadImage = () => {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "test_tt")

        axios.post("https://api.cloudinary.com/v1_1/dkgob05ir/image/upload", formData).then(({ data }) => {
            setImage(data.secure_url)


        })



    }
    // const myImage: any = new CloudinaryImage("sample", { cloudName: 'dkgob05ir' }).resize(fill().width(100).height(150));

    return (
        <div>
            <input type="file"
                onChange={(event: any) => {
                    setImage(event.target.files[0])
                }
                } />
            {/* <div>
                <AdvancedImage cldImg={myImage} />
            </div> */}
            <button onClick={uploadImage}>Upload Image</button>
            {image && (
                <img src={image} alt="Upload image" />
            )}

        </div>
    )
}

export default uploadImagePage

