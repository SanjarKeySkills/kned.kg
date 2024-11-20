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
                            Кыргызская Республика г.Бишкек,
                            <br /> ул. Исанова 105/3, 6 этаж, кабинет 2
                        </p>
                        <p>+996 509 425 995 kned.org@gmail.com</p>
                    </div>

                    <div className={styles.contactFormButtonsAndSocial}>
                        <a href="#" className={styles.sDarkLink}>
                            Реквизиты
                        </a>
                        {/* <a href="/" className={styles.sDarkLink}>
                            Критерии членства
                        </a> */}
                        <a href="/about" className={styles.sDarkLink}>
                            О палате
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
                        <p>ВАРИАНТЫ ЧЛЕНСТВА</p>
                        <div className={styles.inputContainer}>
                            <div className={styles.inputWrapper}>
                                <input
                                    type="radio"
                                    id="active"
                                    name="membership"
                                    value="active"
                                    checked
                                />
                                <label for="active">Действительное</label>
                            </div>
                            <div className={styles.inputWrapper}>
                                <input
                                    type="radio"
                                    id="associated"
                                    name="membership"
                                    value="associated"
                                />
                                <label for="associated">Ассоциированное</label>
                            </div>
                        </div>
                        <div className={styles.buttonWrapper}>
                            <Button size="s" variant="outlined">
                                ОТПРАВИТЬ
                            </Button>
                        </div>
                    </form>
                    <div className={styles.contactOfficial}>
                        <span>
                            Для вступления в Палату кандидату необходимо
                            предоставить заявление, копия паспорта, резюме и
                            фотография кандидата, а также иные документы,
                            которые кандидат считает нужным приложить, чтобы
                            подтвердить соответствие критериям, указанным в п.
                            2.3. Положения о членстве Палаты. <br />
                            <br />
                            Кандидат в члены Палаты также должен представить
                            одну рекомендацию письменную (на бумажном или
                            электронном носителе) от действующих членов Палаты
                            и/или пройти собеседование с Советом Палаты, в
                            соответствии с п. 2.5. Положения о членстве.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
