import styles from './label.module.scss';
import {ILabel} from "@components/label/interface.ts";
import React from "react";

const Label: React.FC<ILabel> = ({value, name}) => {
    return <label htmlFor={name} className={styles.label}>{value}</label>
}

export default Label;