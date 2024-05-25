import PhotoUpload from "@components/photoUpload/UI/photoUpload.tsx";
import {Button, Input, InputRef, Select, SelectProps, Space, UploadFile} from "antd";
import styles from "./form.module.scss";
import Count from "@components/count/UI/count.tsx";
import React, {useRef, useState} from "react";
import {PlusOutlined} from "@ant-design/icons";
import RadioButton from "@components/radioButton/UI/button.tsx";
import {getUserID} from "../../../API/token.ts";
import {postRecipes} from "../../../API/network.ts";

const FormModal = () => {
    const [file, setFile] = useState<UploadFile | null>(null);
    const [count, setCount] = useState<number>(1);
    const [items, setItems] = useState(['0.1 kg', '0.2 kg', '0.3 kg', '0.4 kg', '0.5 kg', '1.0 kg', '1.5 kg']);
    const [name, setName] = useState('');
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [difficulty, setDifficulty] = useState<"Easy" | "Medium" | "Hard">("Easy");
    const [preparation, setPreparation] = useState<string>('');
    const [selectedCategories, setSelectedCategories] = useState<number>();
    const inputRef = useRef<InputRef>(null);
    const [ingredients, setIngredients] = useState<{ name: string, quantity: string, unit_name: string }[]>([]);
    const [ingredientNames, setIngredientNames] = useState<string[]>(['']);
    const handleIngredientNameChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newIngredientNames = [...ingredientNames];
        newIngredientNames[index] = event.target.value;
        setIngredientNames(newIngredientNames);
    };

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

    const handleOnChangeOption = (value: number) => {
        setSelectedCategories(value);
        console.log('Selected categories:', value);
    };

    const options: SelectProps['options'] = ["Breakfast", "Lunch", "Dinner"].map((category, index) => ({
        label: category,
        value: index
    }));

    const handleDifficultyChange = (level: "Easy" | "Medium" | "Hard") => {
        setDifficulty(level);
    };

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(title);
        console.log(description);
        console.log(ingredients)
        console.log('Difficulty:', difficulty);
        console.log('Selected categories:', selectedCategories);
        if (file && file.originFileObj) {
            console.log('File:', file.originFileObj);
        }
        console.log(preparation);
        console.log({
            title: title,
            author: getUserID(),
            description: description,
            category: selectedCategories,
            cook_time: preparation,
            difficulty: difficulty,
            ingredients: ingredients,
            image: file
        })
        const author = getUserID();

        if (author && selectedCategories && ingredients && file) {
            postRecipes(title, author, description, selectedCategories, preparation, difficulty, ingredients, file).then((r) => console.log(r)).catch(e => console.error(e))
        }
    };
    const handleSelectChange = (value: string, ingredientName: string) => {
        const newIngredients = [...ingredients, {name: ingredientName, quantity: value, unit_name: ingredientName}];
        setIngredients(newIngredients);
    };

    return (
        <form className={styles.form} onSubmit={handleOnSubmit}>
            <div className={`${styles.field}`}>
                <label>Add a recipe photo</label>
                <PhotoUpload file={file} setFile={setFile}/>
            </div>
            <div className={styles.field}>
                <label className={styles.field__label}>Name of Recipe</label>
                <input
                    className={styles.field__input}
                    value={title}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
                    placeholder={'Recipe title'}
                />
            </div>
            <div className={styles.field}>
                <label>Add a description</label>
                <input
                    className={styles.field__input}
                    value={description}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)}
                    placeholder={'Description'}
                />
            </div>
            {Array.from({length: count}, (_, index) => (
                <div className={styles.field} key={index}>
                    <label>Add an ingredient</label>
                    <div className={styles.column}>
                        <input className={styles.field__input} value={ingredientNames[index]}
                               onChange={(event) => handleIngredientNameChange(event, index)}
                               placeholder={'Ingredient'}/>
                        <Select
                            onChange={(value) => {
                                handleSelectChange(value, ingredientNames[index]);
                            }}

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
                                </>
                            )}
                            options={items.map((item) => ({label: item, value: item}))}
                        />
                        <Count onClick={() => {
                            setCount(count + 1)
                            setIngredientNames([...ingredientNames, ''])
                        }}/>
                    </div>
                </div>
            ))}
            <div className={styles.difficulty}>
                <RadioButton checked={difficulty === 'Easy'} text={'Easy'}
                             onClick={() => handleDifficultyChange('Easy')}/>
                <RadioButton checked={difficulty === 'Medium'} text={'Medium'}
                             onClick={() => handleDifficultyChange('Medium')}/>
                <RadioButton checked={difficulty === 'Hard'} text={'Hard'}
                             onClick={() => handleDifficultyChange('Hard')}/>
            </div>
            <div className={styles.field}>
                <label className={styles.field__label}>Category of meal</label>
                <Select
                    style={{width: '100%'}}
                    placeholder={'Category'}
                    onChange={handleOnChangeOption}
                    options={options}
                />
            </div>
            <div className={styles.field}>
                <label className={styles.field__label}>Preparation time</label>
                <input
                    className={styles.field__input}
                    value={preparation}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPreparation(event.target.value)}
                    placeholder={'Preparation time'}
                />
            </div>
            <button className={styles.button} type={"submit"}>Create a recipe</button>
        </form>
    );
}

export default FormModal;