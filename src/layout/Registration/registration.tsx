import Header from "@components/header/UI/header.tsx";
import Label from "@components/label/ui/label.tsx";
import Input from "@components/input/UI/input.tsx";
import InputPassword from "@components/input/UI/inputPassword.tsx";
import Button from "@components/button/UI/button.tsx";
import SingLink from "@components/singLink/UI/singLink.tsx";

import styles from "./registration.module.scss";

import people from "@assets/icons/people.svg";
import et from "@assets/icons/mail.svg";

import {Formik, Form, Field, FieldProps} from "formik";
import * as Yup from "yup";
import {IRegistration} from "@layout/Registration/interface.ts";

const Registration = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.content}>
                <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        password: '',
                        repassword: '',
                    }}
                    validationSchema={Yup.object().shape({
                        username: Yup.string().required('Required Field').min(3, 'Username must be at less characters'),
                        email: Yup.string().required("Required field!").email("Invalid Email"),
                        password: Yup.string().required("Required field").min(6, "Password must be at less characters"),
                        repassword: Yup.string().required("Required field").min(6, "Password must be at less characters"),
                    })}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({values, touched, errors}) => (
                        <Form className={styles.form}>
                            <div className={styles.field}>
                                <Label value={'Username'} name={'username'}/>
                                <Field
                                    name={'username'}

                                    value={values.username}
                                    render={({field}: FieldProps<IRegistration>) => (
                                        <Input form field={field} img={people} placeholder={'Your email please'}
                                               type={'text'} name={field.name}

                                        />
                                    )}

                                />
                                {touched.username && errors.username && (
                                    <div>{errors.username}</div>
                                )}
                            </div>
                            <div className={styles.field}>
                                <Label value={'Gmail'} name={'email'}/>
                                <Field
                                    name={'email'}

                                    value={values.email}
                                    render={({field}: FieldProps<IRegistration>) => (
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
                                    render={({field}: FieldProps<IRegistration>) => (
                                        <InputPassword form type={'password'} field={field}
                                                       placeholder={'Введите ваш пароль'} name={field.name}/>
                                    )}

                                />
                                {touched.password && errors.password && (
                                    <div>{errors.password}</div>
                                )}
                            </div>
                            <div className={styles.field}>
                                <Label name={'repassword'} value={'Password'}/>
                                <Field
                                    values={values.repassword}
                                    name={'repassword'}
                                    render={({field}: FieldProps<IRegistration>) => (
                                        <InputPassword form type={'password'} field={field}
                                                       placeholder={'Введите ваш пароль'} name={field.name}/>
                                    )}

                                />
                                {touched.repassword && errors.repassword && (
                                    <div>{errors.repassword}</div>
                                )}
                            </div>
                            <Button text={'Sing In'}/>
                        </Form>
                    )}

                </Formik>
                <SingLink text={'I don’t have an account?'} actionText={'Sign Up Now'} url={'/auth'}/>
            </div>
        </div>
    )
}

export default Registration