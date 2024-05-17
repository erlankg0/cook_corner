import PhotoUpload from "@components/photoUpload/UI/photoUpload.tsx";
import {Button, Input, InputRef, Select, Space, SelectProps} from "antd";
import styles from "./form.module.scss"
import Count from "@components/count/UI/count.tsx";
import {useRef, useState} from "react";
import {PlusOutlined} from "@ant-design/icons";
import RadioButton from "@components/radioButton/UI/button.tsx";

const FormModal = () => {
    const [count, setCount] = useState<number>(1);
    const handleIncrementOnClick = () => {
        setCount((value) => value + 1);
    }

    const [items, setItems] = useState(['0.1 kg', '0.2 kg', '0.3 kg', '0.4 kg', '0.5 kg', '1.0 kg', '1.5 kg']);
    const [name, setName] = useState('');
    const inputRef = useRef<InputRef>(null);

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

    const options: SelectProps['options'] = [];

    return (
        <form className={styles.form}>
            <div className={`${styles.field}`}>
                <label>Add a recipe photo</label>
                <PhotoUpload/>
            </div>
            <div className={styles.field}>
                <label className={styles.field__label}>Add Name</label>
                <input className={styles.field__input} placeholder={'aallo'}/>
            </div>
            <div className={styles.field}>
                <label>Add Name</label>
                <input className={styles.field__input} placeholder={'aallo'}/>
            </div>
            {Array.from({length: count}, () => (
                <div className={styles.field}>
                    <label>Add Name</label>
                    <div className={styles.column}>
                        <input className={styles.field__input} placeholder={'aallo'}/>
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
                <RadioButton text={'Easy'} onClick={() => console.log('easy')}/>
                <RadioButton text={'Easy'} onClick={() => console.log('easy')}/>
                <RadioButton text={'Easy'} onClick={() => console.log('easy')}/>
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
                <input className={styles.field__input} placeholder={'aallo'}/>
            </div>
            <button className={styles.button} type={"submit"}>Create a recipe</button>
        </form>
    )
}

export default FormModal;