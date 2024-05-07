import Header from "@components/header/UI/header.tsx";
import Input from "@components/input/UI/input.tsx";
import InputPassword from "@components/input/UI/inputPassword.tsx";
import Label from "@components/label/ui/label.tsx";
import Button from "@components/button/UI/button.tsx";
import styles from './auth.module.scss'
import SingLink from "@components/singLink/UI/singLink.tsx";
import et from "@assets/icons/mail.svg";

const Auth = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.content}>
                <form className={styles.form}>
                    <div className={styles.field}>
                        <Label value={'Gmail'} name={'email'}/>
                        <Input name={'email'} type={'email'} value={''} placeholder={'Напишите вашу э почту'} img={et}/>
                    </div>
                    <div>
                        <Label name={'password'} value={'Password'}/>
                        <InputPassword name={'password'} type={'password'} value={''}
                                       placeholder={'Введите ваш пароль'}/>
                    </div>
                    <Button text={'Sing In'}/>
                </form>
                <SingLink text={'I don’t have an account?'} actionText={'Sign Up Now'} url={'/registration'}/>

            </div>

        </div>
    )
}

export default Auth;