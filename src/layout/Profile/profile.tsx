import {Modal} from "antd";
import {useState} from "react";

import Aside from "@components/aside/UI/aside.tsx";
import UserPicture from "@components/userpic/UI/userpic.tsx";
import UserCounter from "@components/usercounter/UI/usercounter.tsx";
import Userinfo from "@components/userinfo/UI/userinfo.tsx";
import UserButton from "@components/userbutton/UI/userbutton.tsx";
import Card from "@components/card/UI/card.tsx";

import styles from "./profile.module.scss";
import image from "@assets/image/card3.jpg";
import ImageUpload from "@components/userPhotoUpload/UI/userimageupload.tsx";


const Profile = () => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOnClickIsOpen = () => {
        setOpen(!open);
    }
    return (
        <main className={styles.content}>
            <Aside/>
            <div className={styles.body}>
                <div className={styles.profile}>
                    <h2 className={styles.title}>Profile</h2>
                    <div className={styles.user}>
                        <UserPicture/>
                        <div className={styles.user__info}>
                            <div className={styles.user__counter}>
                                <UserCounter count={29} paragraph={'Recipes'} key={'recipes'}/>
                                <UserCounter count={144} paragraph={'Followers'} key={'followers'}/>
                                <UserCounter count={100} paragraph={'Following'} key={'following'}/>
                            </div>
                            <Userinfo
                                title={'Sarthak Ranjan Hota'}
                                paragraph={'I\'m a passionate chef who loves creating delicious dishes with flair.'}
                            />
                            <UserButton onClick={handleOnClickIsOpen}/>
                        </div>
                    </div>
                </div>
                <div className={styles.saves}>
                    <div className={styles.saves__text}>
                        <text className={styles.saves__title}>My Recipes</text>
                        <text className={styles.saves__paragraph}>Saves recipes</text>
                    </div>
                    <div className={styles.cards}>
                        {Array.from({length: 30}, () => (<Card image={image} title={''}/>))}
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onCancel={handleOnClickIsOpen}
                centered={true}
                footer={null}
            >
                <div>
                    <ImageUpload/>
                </div>
            </Modal>
        </main>
    )
}

export default Profile;