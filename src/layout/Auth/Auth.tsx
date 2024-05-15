import Header from "@components/header/UI/header.tsx";
import Input from "@components/input/UI/input.tsx";
import InputPassword from "@components/input/UI/inputPassword.tsx";
import Label from "@components/label/ui/label.tsx";
import Button from "@components/button/UI/button.tsx";
import styles from './auth.module.scss'
import SingLink from "@components/singLink/UI/singLink.tsx";
import et from "@assets/icons/mail.svg";
import {Field, FieldProps, Form, Formik} from "formik";
import * as Yup from 'yup';
import {useAddDispatch, useAppSelector} from "@redux/hooks.ts";
import {setEmail, setPassword} from "@redux/reducer/auth.ts";
import {IAuth} from './interface.ts'
import {auth} from "../../API/network.ts";


const Auth = () => {
    const email = useAppSelector(state => state.auth.email);
    const password = useAppSelector(state => state.auth.password)
    const dispatch = useAddDispatch();

    const handleEmailOnChange = (email: string) => {
        dispatch(setEmail(email));
    }
    const handlePasswordOnChange = (password: string) => {
        dispatch((setPassword(password)));
    }

    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.content}>
                <Formik
                    initialValues={{
                        email: email,
                        password: password,
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().required("Required field!").email("Invalid Email"),
                        password: Yup.string().required("Required field").min(6, "Password must be at less characters"),
                    })}
                    onSubmit={() => {
                        auth('era.ab.02@gmail.com', '123321era').then((r) => console.log(r))
                    }}

                >
                    {({values, touched, errors}) => (
                        <Form className={styles.form} onChange={() => {
                            handlePasswordOnChange(values.password);
                            handleEmailOnChange(values.email);
                        }}>
                            <div className={styles.field}>
                                <Label value={'Gmail'} name={'email'}/>
                                <Field
                                    name={'email'}

                                    value={values.email}
                                    render={({field}: FieldProps<IAuth>) => (
                                        <Input form field={field} img={et} placeholder={'Your email please'}
                                               type={'email'} name={field.name}

                                        />
                                    )}

                                />
                                {touched.email && errors.email && (
                                    <div>{errors.email}</div>
                                )}
                            </div>
                            <div className={styles.field}>
                                <Label name={'password'} value={'Password'}/>
                                <Field
                                    values={values.password}
                                    name={'password'}
                                    render={({field}: FieldProps<IAuth>) => (
                                        <InputPassword form type={'password'} field={field}
                                                       placeholder={'Введите ваш пароль'} name={''}/>
                                    )}

                                />
                                {touched.password && errors.password && (
                                    <div>{errors.password}</div>
                                )}
                            </div>
                            <Button text={'Sing In'}/>
                        </Form>
                    )}
                </Formik>
                <SingLink text={'I don’t have an account?'} actionText={'Sign Up Now'} url={'/registration'}/>

            </div>

        </div>
    )
}

export default Auth;