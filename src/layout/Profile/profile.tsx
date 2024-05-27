import {Modal} from "antd";
import {useEffect, useState} from "react";

import Aside from "@components/aside/UI/aside.tsx";
import UserPicture from "@components/userpic/UI/userpic.tsx";
import UserCounter from "@components/usercounter/UI/usercounter.tsx";
import Userinfo from "@components/userinfo/UI/userinfo.tsx";
import UserButton from "@components/userbutton/UI/userbutton.tsx";
import Card from "@components/card/UI/card.tsx";

import styles from "./profile.module.scss";
import UserForm from "@components/userform/UI/userform.tsx";
import {getSaveRecipes, getUser} from "../../API/network.ts";
import {getUserID} from "../../API/token.ts";
import {useAddDispatch, useAppSelector} from "@redux/hooks.ts";
import {IUser, setData} from "@redux/reducer/user.ts";
import {IRecipe} from "../../API/interface.ts";

const Profile = () => {
    const [open, setOpen] = useState<boolean>(false);
    const followers = useAppSelector(state => state.user.count_followers);
    const following = useAppSelector(state => state.user.count_following);
    const count_recipes = useAppSelector(state => state.user.count_recipes);
    const userName = useAppSelector(state => state.user.username);
    const userBio = useAppSelector(state => state.user.user_bio);
    const [recipes, setRecipes] = useState<IRecipe[]>([])

    const handleOnClickIsOpen = () => {
        setOpen(!open);
    }
    const dispatch = useAddDispatch();
    const handleFillUseData = (values: IUser) => {
        dispatch(setData(values))
    }
    useEffect(() => {
        const id = getUserID();
        if (id) {
            getUser(id).then((response) => {
                handleFillUseData(response.data)
                console.log(response.data)
            }).catch(e => console.log(e));
            getSaveRecipes().then((res) => setRecipes(res.data)).catch((e) => console.log(e))
        }
    }, [])
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
                                <UserCounter count={count_recipes} paragraph={'Recipes'} key={'recipes'}/>
                                <UserCounter count={followers} paragraph={'Followers'} key={'followers'}/>
                                <UserCounter count={following} paragraph={'Following'} key={'following'}/>
                            </div>
                            <Userinfo
                                title={userName}
                                paragraph={userBio}
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
                        {recipes && recipes.map((recipe) => (<Card {...recipe}/>))}
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onCancel={handleOnClickIsOpen}
                centered={true}
                footer={null}
            >
                <UserForm/>
            </Modal>
        </main>
    )
}

export default Profile;