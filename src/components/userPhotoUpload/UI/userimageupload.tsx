import React, {ChangeEvent} from 'react';
import camera from "@assets/icons/camera.svg";
import styles from "./userimageupload.module.scss"
import {IImageUpload} from "@components/userform/interface.ts";

const ImageUpload: React.FC<IImageUpload> = ({setFiles}) => {

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFiles(event.target.files);
    };


    return (
        <div>
            <input
                type="file"
                name="images"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                style={{display: 'none'}}
                id="fileInput"
            />
            <label className={styles.upload} htmlFor="fileInput">
                <img
                    src={camera} // путь к изображению кнопки
                    alt="Загрузить"
                    style={{cursor: 'pointer'}}
                />
                <p className={styles.text}>Upload Image</p>
            </label>
        </div>
    );
}

export default ImageUpload;
