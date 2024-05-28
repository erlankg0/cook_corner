import React, {useState} from "react";
import {IModal} from "@components/modal/interface.ts";
import styles from "./modal.module.scss"
import PhotoUpload from "@components/photoUpload/UI/photoUpload.tsx";
import {RcFile} from "antd/lib/upload";

const Modals: React.FC<IModal> = ({active, setActive}) => {
    const [file, setFile] = useState<RcFile | null>(null);

    return (
        <div className={active ? `${styles.modal} ${styles.active}` : styles.modal} onClick={() => setActive(false)}>
            <div className={styles.content} onClick={()=> setActive(true)}>
                <PhotoUpload file={file} setFile={setFile}/>
            </div>
        </div>
    )
}

export default Modals;