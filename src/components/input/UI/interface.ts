import {FieldProps, FormikProps} from "formik";

export interface IInput<T> {
    placeholder: string,
    type: "email" | "password" | "text",
    img?: string,
    name: string,
    field: FieldProps['field'],
    form: FormikProps<T>
}