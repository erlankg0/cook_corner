import React, {ChangeEvent, useState} from 'react';
import camera from "@assets/icons/camera.svg";
import styles from "./userimageupload.module.scss"

const ImageUpload: React.FC = () => {
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedFiles(event.target.files);
    };

    console.log(selectedFiles);

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
