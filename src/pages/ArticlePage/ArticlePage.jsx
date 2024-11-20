import React, { useEffect } from "react";
import styles from "./articlePage.module.scss";
import { useParams } from "react-router-dom";
import HeroHeader from "../../components/Widget/LayoutsComponentsBlock/HeroHeader/heroHeader";
import articleData from "../../components/Widget/ArticlesBlock/ArticlesCard/ArticlesData";
import FormatText from "../../components/Widget/FormatText/FormatText";

const ArticlePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();
    const article = articleData.find((article) => article.id === id);
    // получаем ту article с такой id и ту статью приводим на нашу константу
    // вместо type -  встанет массив articleData
    return (
        <div className={styles.articleCard}>
            <HeroHeader />
            <div className={styles.articlePage}>
                <div className={styles.articlePageContainer}>
                    <div className={styles.titleBlock}>
                        <img
                            src={article.image2}
                            alt="newsImg"
                            className={styles.newsImg}
                        />
                        <div className={styles.articleAnnotation}>
                            <h2>
                                <FormatText text={article.title} />
                            </h2>
                            <p>{article.author}</p>
                            <p>{article.date}</p>
                            <div className={styles.line_gold}></div>
                            <p>{article.annotation}</p>
                        </div>
                    </div>
                    <div className={styles.articleText}>
                        <div className={styles.line_gold}></div>
                        <p>
                            <FormatText text={article.inter0} />
                        </p>
                        <p>
                            <FormatText text={article.info0} />
                        </p>
                        <p>
                            <FormatText text={article.inter1} />
                        </p>
                        <p>
                            <FormatText text={article.info1} />
                        </p>
                        <p>
                            <FormatText text={article.inter2} />
                        </p>
                        <p>
                            <FormatText text={article.info2} />
                        </p>
                        <div className={styles.line_grey}></div>
                        <p>
                            <FormatText text={article.inter3} />
                        </p>
                        <p>
                            <FormatText text={article.info3} />
                        </p>
                        <p>
                            <FormatText text={article.inter4} />
                        </p>
                        <p>
                            <FormatText text={article.info4} />
                        </p>
                        <p>
                            <FormatText text={article.inter5} />
                        </p>
                        <p>
                            <FormatText text={article.info5} />
                        </p>
                        <div className={styles.line_gold}></div>
                        <p>
                            <FormatText text={article.inter6} />
                        </p>
                        <p>
                            <FormatText text={article.info6} />
                        </p>
                        <p>
                            <FormatText text={article.inter7} />
                        </p>
                        <p>
                            <FormatText text={article.info7} />
                        </p>
                        <p>
                            <FormatText text={article.inter8} />
                        </p>
                        <p>
                            <FormatText text={article.info8} />
                        </p>
                        <p>
                            <FormatText text={article.inter9} />
                        </p>
                        <p>
                            <FormatText text={article.info9} />
                        </p>
                        <p>
                            <FormatText text={article.inter10} />
                        </p>
                        <p>
                            <FormatText text={article.info10} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;
