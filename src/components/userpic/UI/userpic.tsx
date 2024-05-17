import styles from "./userpic.module.scss";
import picture from "@assets/image/userpic.png";


const UserPic = () => {

    return <img className={styles.picture} src={picture} alt={'user picture'}/>
}

export default UserPic;