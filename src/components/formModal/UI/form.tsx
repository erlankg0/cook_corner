import PhotoUpload from "@components/photoUpload/UI/photoUpload.tsx";
import {Button, Input, InputRef, Select, Space, SelectProps, UploadFile} from "antd";
import styles from "./form.module.scss"
import Count from "@components/count/UI/count.tsx";
import React, {useEffect, useRef, useState} from "react";
import {PlusOutlined} from "@ant-design/icons";
import RadioButton from "@components/radioButton/UI/button.tsx";
import {ICategories} from "../../../API/interface.ts";
import {getCategories} from "../../../API/network.ts";

const FormModal = () => {
    const [file, setFile] = useState<UploadFile | null>(null);

    const [count, setCount] = useState<number>(1);
    const handleIncrementOnClick = () => {
        setCount((value) => value + 1);
    }

    const [items, setItems] = useState(['0.1 kg', '0.2 kg', '0.3 kg', '0.4 kg', '0.5 kg', '1.0 kg', '1.5 kg']);
    const [name, setName] = useState('');
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [difficulty, setDifficulty] = useState<"Easy" | "Medium" | "Hard">("Easy");
    const [preparation, setPrerapartion] = useState<string>();
    const inputRef = useRef<InputRef>(null);
    const [categories, setCategories] = useState<ICategories[]>([])

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const addItem = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        e.preventDefault();
        setItems([...items, name || `Add weight`]);
        setName('');
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    };

    const handleOnChangeOption = (value: string) => {
        console.log(`selected ${value}`)
    }

    const options: SelectProps['options'] = categories;

    useEffect(() => {
        getCategories().then((response) => setCategories(response.data.results))
    }, [])

    return (
        <form className={styles.form} onSubmit={()=> console.log(difficulty)}>
            <div className={`${styles.field}`}>
                <label>Add a recipe photo</label>
                <PhotoUpload file={file} setFile={setFile}/>
            </div>
            <div className={styles.field}>
                <label className={styles.field__label}>Name of Recipe</label>
                <input className={styles.field__input} value={title}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
                       placeholder={'Recipe title'}/>
            </div>
            <div className={styles.field}>
                <label>Add a description</label>
                <input className={styles.field__input} value={description}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)}
                       placeholder={'Description'}/>
            </div>
            {Array.from({length: count}, () => (
                <div className={styles.field}>
                    <label>Add an ingredient</label>
                    <div className={styles.column}>
                        <input className={styles.field__input} placeholder={'Ingredient'}/>
                        <Select
                            placeholder={'0 kg'}
                            dropdownRender={(menu) => (
                                <>
                                    {menu}
                                    <Space style={{padding: '0 8px 4px'}}>
                                        <Input
                                            placeholder="Please enter weight"
                                            ref={inputRef}
                                            value={name}
                                            onChange={onNameChange}
                                            onKeyDown={(e) => e.stopPropagation()}
                                        />
                                        <Button type="text" icon={<PlusOutlined/>} onClick={addItem}/>
                                    </Space>
                                </>)}
                            options={items.map((item) => ({label: item, value: item}))}
                        >
                        </Select>
                        <Count onClick={handleIncrementOnClick}/>
                    </div>
                </div>
            ))}
            <div className={styles.difficulty}>
                <RadioButton text={'Easy'} onClick={() => setDifficulty("Easy")}/>
                <RadioButton text={'Medium'} onClick={() => setDifficulty("Medium")}/>
                <RadioButton text={'Hard'} onClick={() => setDifficulty("Hard")}/>
            </div>
            <div className={styles.field}>
                <label className={styles.field__label}>Category of meal</label>
                <Select
                    mode={"tags"}
                    style={{width: '100%'}}
                    placeholder={'Category'}
                    onChange={handleOnChangeOption}
                    options={options}
                />
            </div>
            <div className={styles.field}>
                <label className={styles.field__label}>Preparation time</label>
                <input className={styles.field__input} value={preparation}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPrerapartion(event.target.value)}
                       placeholder={'Preparation time'}/>
            </div>
            <button className={styles.button} type={"submit"}>Create a recipe</button>
        </form>
    )
}

export default FormModal;