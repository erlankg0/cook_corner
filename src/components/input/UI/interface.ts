export interface IInput {
    value: string,
    onChange?: (values: string) => void,
    onClick?: () => void;
    placeholder: string,
    name: string,
    type: "email" | "password" | "text",
    img?: string,
}