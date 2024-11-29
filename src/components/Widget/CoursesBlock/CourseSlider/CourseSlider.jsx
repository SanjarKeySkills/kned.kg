import React from "react";
import styles from "./courseSlider.module.css";
import img1 from "../../../../assets/eventData/ifc_metup_040324/ifc_meetup_1_11zon.png";
import img2 from "../../../../assets/eventData/ifc_metup_040324/ifc_meetup_2_11zon.png";
import img3 from "../../../../assets/eventData/ifc_metup_040324/ifc_meetup_3_11zon.png";
import img4 from "../../../../assets/eventData/ifc_metup_040324/ifc_meetup_4_11zon.png";

const CourseSlider = () => {
    // Компоненты на querySelector
    // let nextDom = document.getElementById("next");
    // let prevDom = document.getElementById("prev");
    // let carouselDom = document.querySelector("carousel");
    // let listItemDom = document.querySelector("carousel .list");
    // let thumbnailDom = document.querySelector("carousel .thumbnail");

    // nextDom.onclick = function () {
    //     showSlider("next");
    // };
    // prevDom.onclick = function () {
    //     showSlider("prev");
    // };

    // let timeRunning = 3000;
    // let timeAutoNext = 7000;
    // let runTimeOut;
    // let runAutoRun = setTimeout(() => {
    //     nextDom.click();
    // }, timeAutoNext);

    // function showSlider(type) {
    //     let itemSlider = document.querySelectorAll(".carousel .list .item");
    //     let itemThumbnail = document.querySelectorAll(
    //         ".carousel .thumbnail .item"
    //     );
    //     if (type === "next") {
    //         listItemDom.appendChild(itemSlider[0]);
    //         thumbnailDom.appendChild(itemThumbnail[0]);
    //         carouselDom.classList.add("next");
    //     } else {
    //         let positionLastItem = itemSlider.length - 1;
    //         listItemDom.prepend(itemSlider[positionLastItem]);
    //         thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    //         carouselDom.classList.add("prev");
    //     }

    //     clearTimeout(runTimeOut);
    //     runTimeOut = setTimeout(() => {
    //         carouselDom.classList.remove("next");
    //         carouselDom, classList.remove("prev");
    //     }, timeRunning);

    //     clearTimeout(runAutoRun);
    //     runAutoRun = setTimeout(() => {
    //         nextDom.click();
    //     }, timeAutoNext);
    // }

    return (
        <>
            <div className={styles.courseSlider}>
                <div className={styles.carousel}>
                    123
                    <div className={styles.list}>
                        <div className={styles.item}>
                            <img src={img1} alt="img1" />
                            <div className={styles.content}>
                                <div className={styles.author}>Author</div>
                                <div className={styles.title}>Sometext</div>

                                <div className={styles.topic}>Animal</div>
                                <div className={styles.desc}>
                                    Lorem ipsum dolor sit amet.
                                </div>
                                <div className={styles.buttons}>
                                    <button>SEE MORE</button>
                                    <button>SUBSCRIBE</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <img src={img2} alt="img2" />
                            <div className={styles.content}>
                                <div className={styles.author}>Author</div>
                                <div className={styles.title}>Sometext</div>

                                <div className={styles.topic}>Animal</div>
                                <div className={styles.desc}>
                                    Lorem ipsum dolor sit amet.
                                </div>
                                <div className={styles.btns}>
                                    <button>SEE MORE</button>
                                    <button>SUBSCRIBE</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <img src={img3} alt="img3" />
                            <div className={styles.content}>
                                <div className={styles.author}>Author</div>
                                <div className={styles.title}>Sometext</div>

                                <div className={styles.topic}>Animal</div>
                                <div className={styles.desc}>
                                    Lorem ipsum dolor sit amet.
                                </div>
                                <div className={styles.btns}>
                                    <button>SEE MORE</button>
                                    <button>SUBSCRIBE</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <img src={img4} alt="img4" />
                            <div className={styles.content}>
                                <div className={styles.author}>Author</div>
                                <div className={styles.title}>Sometext</div>

                                <div className={styles.topic}>Animal</div>
                                <div className={styles.desc}>
                                    Lorem ipsum dolor sit amet.
                                </div>
                                <div className={styles.btns}>
                                    <button>SEE MORE</button>
                                    <button>SUBSCRIBE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="thumbnail">
                        <div className="item">
                            <img
                                src="../../../../assets/eventData/ifc_metup_040324/ifc_meetup_1_11zon.png"
                                alt="img1"
                            />
                            <div className="content">
                                <div className="title">Name Slider</div>
                                <div className="des">Description</div>
                            </div>
                        </div>
                        <div className="item">
                            <img
                                src="../../../../assets/eventData/ifc_metup_040324/ifc_meetup_2_11zon.png"
                                alt="img2"
                            />
                            <div className="content">
                                <div className="title">Name Slider</div>
                                <div className="des">Description</div>
                            </div>
                        </div>
                        <div className="item">
                            <img
                                src="../../../../assets/eventData/ifc_metup_040324/ifc_meetup_3_11zon.png"
                                alt="img3"
                            />
                            <div className="content">
                                <div className="title">Name Slider</div>
                                <div className="des">Description</div>
                            </div>
                        </div>
                        <div className="item">
                            <img
                                src="../../../../assets/eventData/ifc_metup_040324/ifc_meetup_4_11zon.png"
                                alt="img4"
                            />
                            <div className="content">
                                <div className="title">Name Slider</div>
                                <div className="des">Description</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.arrows}>
                        <button id="prev">❮</button>
                        <button id="next">❯</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseSlider;
