import {FC} from "react";
import image from "@assets/icons/count.svg";
import {ICount} from "@components/count/interface.ts";
import styles from "./count.module.scss"

const Count: FC<ICount> = ({onClick}) => {
    return <img className={styles.count} onClick={onClick} src={image} alt={'count image button'}/>
}

export default Count