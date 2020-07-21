import { useState, useEffect } from 'react';
import axios from 'axios';
export default function AddImages({ handleFormChange }) {
    const [state, setState] = useState({
        mainImg: null,
        extraImages: {},
    });
    // TODO: Add image upload and generate URL's for Form state
    const imgChangeHandler = async (event) => {
        const { files, name } = event.target;
        console.log(event.target);
        const data = new FormData();
        data.append('image', files[0]);

        let res;
        try {
            res = await axios.post(
                'https://cloudinary-uploader.vercel.app/api/v1/upload',
                data,
            );
            console.log(res.data.file.url);
        } catch (error) {
            console.log(error);
        }
        if (name === 'mainImg') {
            setState({ ...state, mainImg: res.data.file.url });
        } else {
            setState({
                ...state,
                extraImages: {
                    ...state.extraImages,
                    [name]: res.data.file.url,
                },
            });
        }
    };
    useEffect(() => {
        handleFormChange({ addImages: state });
    }, [state]);
    return (
        <div className="imageUploadForm">
            {/* TODO: Work on Image Upload UI */}
            <input
                type="file"
                name="mainImg"
                onChange={imgChangeHandler}
                className="imageInputButton"
            />
            <input
                type="file"
                name="image2"
                onChange={imgChangeHandler}
                className="imageInputButton"
            />
            <input
                type="file"
                name="image3"
                onChange={imgChangeHandler}
                className="imageInputButton"
            />
        </div>
    );
}
