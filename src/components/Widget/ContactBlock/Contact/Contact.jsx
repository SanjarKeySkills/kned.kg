import React from "react";
import styles from "./contact.module.scss";
import Button from "../../../UI/Button/button.jsx";
import instLogo from "../../../../assets/instagram-logo_contact.svg";
import facebookLogo from "../../../../assets/facebook-logo_contact.svg";

const Contact = () => {
    // const scriptURL =
    //     "https://script.google.com/macros/s/AKfycbyd1N8SX-qGRGTjN_maIQcK-VjGjNcTgS-9L0bhMfsKBZchyevfOeP4Xz3bTLCLIs8H/exec";
    // const form = document.forms["submit-to-google-sheet"];

    // form.addEventListener("submit", (e) => {
    //     e.preventDefault();
    //     fetch(scriptURL, { method: "POST", body: new FormData(form) })
    //         .then((response) => console.log("Success!", response))
    //         .catch((error) => console.error("Error!", error.message));
    // });

    return (
        <div className={styles.contact}>
            <div className={styles.contactWrapper}>
                <div className={styles.contactForm}>
                    <div className={styles.contactFormInfo}>
                        <h2>
                            форма заявки <br /> на вступление в палату
                        </h2>
                        <p>
                            Кыргызская Республика г.Бишкек, ул. Исанова 105/3, 6
                            этаж, кабинет 2
                        </p>
                        <p>+996 509 425 995 kned.org@gmail.com</p>
                    </div>

                    <div className={styles.contactFormButtonsAndSocial}>
                        <a href="#">
                            <Button size="sDark" variant="outlined">
                                Реквизиты
                            </Button>
                        </a>
                        <a href="/#crireriaSection">
                            <Button size="sDark" variant="outlined">
                                Критерии членства
                            </Button>
                        </a>
                        <a href="/about">
                            <Button size="sDark" variant="outlined">
                                О палате
                            </Button>
                        </a>
                    </div>
                    <div className={styles.contactSocial}>
                        <a href="https://www.instagram.com/">
                            <img
                                src={instLogo}
                                alt="Instagram"
                                className={styles.socialLogo}
                            />
                        </a>
                        <a href="https://www.facebook.com/">
                            <img
                                src={facebookLogo}
                                alt="Facebook"
                                className={styles.socialLogo}
                            />
                        </a>
                    </div>
                </div>
                <div className={styles.contactInput}>
                    <form
                        method="post"
                        action="https://script.google.com/macros/s/AKfycbyd1N8SX-qGRGTjN_maIQcK-VjGjNcTgS-9L0bhMfsKBZchyevfOeP4Xz3bTLCLIs8H/exec"
                        name="submit-to-google-sheet">
                        <div className={styles.inputBox}>
                            <span className={styles.details}>Ваше имя</span>
                            <input
                                type="text"
                                name="name"
                                placeholder="ФИО"
                                required
                            />
                        </div>
                        <div className={styles.inputBox}>
                            <span className={styles.details}>
                                Ваша электронная почта
                            </span>
                            <input
                                type="email"
                                name="email"
                                placeholder="электронная почта"
                                required
                            />
                        </div>
                        <div className={styles.inputBox}>
                            <span className={styles.details}>
                                Номер телефона
                            </span>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Телефон"
                                required
                            />
                        </div>
                        <div className={styles.textareaBox}>
                            <span>Ваш комментарий</span>
                            <textarea
                                name="message"
                                cols="30"
                                rows="10"
                                placeholder="Комментарий"></textarea>
                        </div>
                        <div className={styles.buttonWrapper}>
                            <Button size="s" variant="outlined">
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
