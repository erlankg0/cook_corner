export enum Difficulty {
    easy = "Easy",
    medium = "Medium",
    hard = "Hard"
}

export interface ICategories {
    id: number,
    name: string
}

export interface IIngredient {
    name: string,
    quantity: string,
    unit_name: string,
}

export interface IRecipe {
    id: number,
    title: string,
    author: number,
    author_name: string,
    description: string,
    category: string,
    cook__time: Difficulty,
    ingredients: IIngredient[],
    image: string,
    likes_count: string,
    saves_count: string
}

export interface IRecipes {
    "page": number,
    "count": number,
    "next": null | boolean,
    "previous": null | boolean,
    "results": IRecipe[]
}