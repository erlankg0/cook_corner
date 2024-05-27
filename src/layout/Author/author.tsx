import styles from "./author.module.scss";
import Aside from "@components/aside/UI/aside.tsx";
import Card from "@components/card/UI/card.tsx";
import cardImage from "@assets/image/card3.jpg"
import {ArrowLeftOutlined} from "@ant-design/icons";
import {useNavigate, useParams} from "react-router-dom";
import personImage from "@assets/image/userpic.png"
import UserCounter from "@components/usercounter/UI/usercounter.tsx";
import Button from "@components/button/UI/button.tsx";
import {useEffect, useState} from "react";
import {getUser} from "../../API/network.ts";
import {IAuthor} from "@components/author/interface.ts";

const Author = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [author, setAuthor] = useState<IAuthor>()
    const handleOnClickPrev = () => {
        navigate(-1);
    }

    useEffect(() => {
        if (id) {
            getUser(id).then((res) => setAuthor(res.data))
        }
    }, [id])

    return (
        <main className={styles.content}>
            <Aside/>
            {author && (
                <div className={styles.detail}>
                    <section className={styles.detail__header}>
                        <div className={styles.prev} onClick={handleOnClickPrev}><ArrowLeftOutlined/></div>
                        <div className={styles.user}>
                            <img className={styles.user__image} src={personImage} alt={'Person image'}/>
                            <div className={styles.user__info}>
                                <p className={styles.user__title}>{author.username}</p>
                                <text className={styles.user__description}>{author.user_bio}
                                </text>
                                <div className={styles.counter}>
                                    <UserCounter count={`${author.count_recipes}`} paragraph={'Recipes'}
                                                 key={'recipes'}/>
                                    <UserCounter count={`${author.count_followers}`} paragraph={'Followers'}
                                                 key={'followers'}/>
                                    <UserCounter count={`${author.count_following}`} paragraph={'Following'}
                                                 key={'following'}/>
                                </div>
                            </div>
                            <Button text={'Follow'}/>
                        </div>

                    </section>
                    <section className={styles.detail__cards}>
                        <Card id={1} image={cardImage} title={'aa'}/>
                        <Card id={1} image={cardImage} title={'aa'}/>
                        <Card id={1} image={cardImage} title={'aa'}/>
                        <Card id={1} image={cardImage} title={'aa'}/>
                        <Card id={1} image={cardImage} title={'aa'}/>
                        <Card id={1} image={cardImage} title={'aa'}/>
                        <Card id={1} image={cardImage} title={'aa'}/>
                        <Card id={1} image={cardImage} title={'aa'}/>
                        <Card id={1} image={cardImage} title={'aa'}/>
                    </section>
                </div>
            )}
        </main>
    )
}

export default Author;