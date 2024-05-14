import add from "@assets/icons/add.svg"
import styles from "./buttonRecipes.module.scss"

const ButtonRecipes = () => {
    return (
        <button className={styles.button}>
            <img className={styles.button__image} src={add} alt={'add recipes'}/>
            <p>Add your recipe</p>
        </button>
    )
}

export default ButtonRecipes