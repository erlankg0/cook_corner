import Header from "@components/header/UI/header.tsx";
import Label from "@components/label/ui/label.tsx";
import Input from "@components/input/UI/input.tsx";
import InputPassword from "@components/input/UI/inputPassword.tsx";
import Button from "@components/button/UI/button.tsx";
import SingLink from "@components/singLink/UI/singLink.tsx";

import styles from "./registration.module.scss";

import people from "@assets/icons/people.svg";
import et from "@assets/icons/mail.svg";



const Registration = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.content}>
                <form className={styles.form}>

                    <div className={styles.field}>
                        <Label
                            name={'username'}
                            value={'Name'}
                        />
                        <Input
                            img={people}
                            value={''}
                            name={'username'}
                            type={'text'}
                            placeholder={'Enter your name'}
                        />
                    </div>


                    <div className={styles.field}>
                        <Label
                            name={'email'}
                            value={'Gmail'}
                        />
                        <Input
                            img={et}
                            value={''}
                            name={'email'}
                            type={'text'}
                            placeholder={'Enter your name'}
                        />
                    </div>

                    <div className={styles.field}>
                        <Label
                            name={'password'}
                            value={'Password'}
                        />
                        <InputPassword
                            name={'password'}
                            type={'password'}
                            value={''}
                            placeholder={'Введите пароль'}
                        />
                    </div>

                    <div className={styles.field}>
                        <Label
                            name={'re-password'}
                            value={'Re-Password'}
                        />
                        <InputPassword
                            name={'re-password'}
                            type={'password'}
                            value={''}
                            placeholder={'Введите пароль повторно'}
                        />
                    </div>
                    <Button text={'Sing Up'}/>
                </form>
                <SingLink text={'I don’t have an account?'} actionText={'Sign Up Now'} url={'/'}/>

            </div>
        </div>
    )
}

export default Registration