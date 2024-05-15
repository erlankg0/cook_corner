import React from "react";
import {IModal} from "@components/modal/interface.ts";
import styles from "./modal.module.scss"
import PhotoUpload from "@components/photoUpload/UI/photoUpload.tsx";

const Modals: React.FC<IModal> = ({active, setActive}) => {
    return (
        <div className={active ? `${styles.modal} ${styles.active}` : styles.modal} onClick={() => setActive(false)}>
            <div className={styles.content} onClick={()=> setActive(true)}>
                <PhotoUpload/>
            </div>
        </div>
    )
}

export default Modals;