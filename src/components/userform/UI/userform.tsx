import styles from "./userform.module.scss";
import ImageUpload from "@components/userPhotoUpload/UI/userimageupload.tsx";
import {useAddDispatch, useAppSelector} from "@redux/hooks.ts";
import {setUserBio, setUserName} from "@redux/reducer/user.ts";
import React, {useState} from "react";

const UserForm = () => {
    const dispatch = useAddDispatch();

    const username = useAppSelector(state => state.user.username);
    const user_bio = useAppSelector(state => state.user.user_bio);

    const handleOnChangeUserName = (name: string) => {
        dispatch(setUserName(name));
    }

    const handleOnChangeUserBIO = (text: string) => {
        dispatch(setUserBio(text));
    }

    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
    return (
        <form className={styles.form} onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            console.log(selectedFiles);

        }}>
            <div className={styles.field}>
                <label className={styles.field__label}>Change your name</label>
                <input className={styles.field__input} value={username}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleOnChangeUserName(event.target.value)}
                       placeholder={'User name'}/>
            </div>
            <div className={styles.field}>
                <label className={styles.field__label}>Change your name</label>
                <input className={styles.field__input} value={user_bio}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleOnChangeUserBIO(event.target.value)}
                       placeholder={'User name'}/>
            </div>
            <div className={styles.field}>
                <ImageUpload setFiles={setSelectedFiles}/>
            </div>
            <button type={"submit"} className={styles.button}>Save Changes</button>
        </form>
    )
}

export default UserForm;