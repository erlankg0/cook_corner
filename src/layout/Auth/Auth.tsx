//components
import Header from "@components/header/UI/header.tsx";
import Input from "@components/input/UI/input.tsx";
import InputPassword from "@components/input/UI/inputPassword.tsx";
import Label from "@components/label/ui/label.tsx";
import Button from "@components/button/UI/button.tsx";
import SingLink from "@components/singLink/UI/singLink.tsx";
// redux
import {useAddDispatch, useAppSelector} from "@redux/hooks.ts";
import {setEmail, setPassword} from "@redux/reducer/auth.ts";
// Formik + Yup
import {Field, FieldProps, Form, Formik} from "formik";
import * as Yup from 'yup';

import {IAuth} from './interface.ts'
import {auth} from "../../API/network.ts";

import styles from './auth.module.scss'
import et from "@assets/icons/mail.svg";
import {saveTokens, saveUserID} from "../../API/token.ts";
import {useNavigate} from "react-router-dom";
// toastify
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Auth = () => {
    const navigate = useNavigate();
    const email = useAppSelector(state => state.auth.email);
    const password = useAppSelector(state => state.auth.password)
    const dispatch = useAddDispatch();

    const handleEmailOnChange = (email: string) => {
        dispatch(setEmail(email));
    }
    const handlePasswordOnChange = (password: string) => {
        dispatch((setPassword(password)));
    }

    const handleSuccessToasty = (message: string) => {
        toast(<p>{message}</p>, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: true,
            type: "success"
        })
    }
    const handleErrorToasty = (message: string) => {
        toast(<p>{message}</p>, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: true,
            type: "error"
        })
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
                    onSubmit={(values) => {
                        auth(values.email, values.password).then((response) => {
                            console.log(response)
                            if (response.statusText == 'OK') {
                                saveTokens(response.data.access, response.data.refresh);
                                saveUserID(response.data.user);
                                handleSuccessToasty("Success");
                                setTimeout(() => {
                                    navigate("/home")
                                }, 2500)
                            }
                        }).catch(() => handleErrorToasty("Ошибка авторизации"));
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
                                    render={({field, form}: FieldProps<IAuth>) => (
                                        <Input form={form} field={field} img={et} placeholder={'Your email please'}
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
                                    render={({field, form}: FieldProps<IAuth>) => (
                                        <InputPassword form={form} type={'password'} field={field}
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
            <ToastContainer/>
        </div>

    )
}

export default Auth;