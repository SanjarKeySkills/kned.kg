// import React from "react";
// import styles from "./contact.module.scss";
// import Button from "../../../UI/Button/button.jsx";
// import instLogo from "../../../../assets/instagram-logo_contact.svg";
// import facebookLogo from "../../../../assets/facebook-logo_contact.svg";

// const Contact = () => {
//     const scriptURL =
//         "https://script.google.com/macros/s/AKfycbyd1N8SX-qGRGTjN_maIQcK-VjGjNcTgS-9L0bhMfsKBZchyevfOeP4Xz3bTLCLIs8H/exec";
//     const form = document.forms["submit-to-google-sheet"];

//     // form.addEventListener("submit", (e) => {
//     //     e.preventDefault();
//     //     fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     //         .then((response) => console.log("Success!", response))
//     //         .catch((error) => console.error("Error!", error.message));
//     // });

//     return (
//         <div className={styles.contact}>
//             <div className={styles.contactWrapper}>
//                 <div className={styles.contactForm}>
//                     <div className={styles.contactFormInfo}>
//                         <h2>
//                             форма заявки <br /> на вступление в палату
//                         </h2>
//                         <p>
//                             Кыргызская Республика г.Бишкек,
//                             <br /> ул. Исанова 105/3, 6 этаж, кабинет №2
//                         </p>
//                         <p>+996 555 888 242, kned.org@gmail.com</p>
//                     </div>

//                     <div className={styles.contactFormButtonsAndSocial}>
//                         <a href="#" className={styles.sDarkLink}>
//                             Реквизиты
//                         </a>
//                         {/* <a href="/" className={styles.sDarkLink}>
//                             Критерии членства
//                         </a> */}
//                         <a href="/about" className={styles.sDarkLink}>
//                             О палате
//                         </a>
//                     </div>

//                     <div className={styles.contactSocial}>
//                         <a href="https://www.instagram.com/">
//                             <img
//                                 src={instLogo}
//                                 alt="Instagram"
//                                 className={styles.socialLogo}
//                             />
//                         </a>
//                         <a href="https://www.facebook.com/">
//                             <img
//                                 src={facebookLogo}
//                                 alt="Facebook"
//                                 className={styles.socialLogo}
//                             />
//                         </a>
//                     </div>
//                 </div>
//                 <div className={styles.contactInput}>
//                     <form
//                         method="post"
//                         action="https://script.google.com/macros/s/AKfycbyd1N8SX-qGRGTjN_maIQcK-VjGjNcTgS-9L0bhMfsKBZchyevfOeP4Xz3bTLCLIs8H/exec"
//                         name="submit-to-google-sheet">
//                         <div className={styles.inputBox}>
//                             <span className={styles.details}>Ваше имя</span>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 placeholder="ФИО"
//                                 required
//                             />
//                         </div>
//                         <div className={styles.inputBox}>
//                             <span className={styles.details}>
//                                 Ваша электронная почта
//                             </span>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder="электронная почта"
//                                 required
//                             />
//                         </div>
//                         <div className={styles.inputBox}>
//                             <span className={styles.details}>
//                                 Номер телефона
//                             </span>
//                             <input
//                                 type="text"
//                                 name="phone"
//                                 placeholder="Телефон"
//                                 required
//                             />
//                         </div>
//                         <div className={styles.textareaBox}>
//                             <span>Ваш комментарий</span>
//                             <textarea
//                                 name="message"
//                                 cols="30"
//                                 rows="10"
//                                 placeholder="Комментарий"></textarea>
//                         </div>
//                         <p>ВСТУПИТЬ В ПАЛАТУ</p>
//                         <div className={styles.inputContainer}>
//                             <div className={styles.inputWrapper}>
//                                 <input
//                                     type="radio"
//                                     id="active"
//                                     name="membership"
//                                     value="active"
//                                     checked
//                                 />
//                                 <label for="active">Действительное</label>
//                             </div>
//                             <div className={styles.inputWrapper}>
//                                 <input
//                                     type="radio"
//                                     id="associated"
//                                     name="membership"
//                                     value="associated"
//                                 />
//                                 <label for="associated">Ассоциированное</label>
//                             </div>
//                         </div>
//                         <div className={styles.buttonWrapper}>
//                             <Button size="s" variant="outlined">
//                                 ОТПРАВИТЬ
//                             </Button>
//                         </div>
//                     </form>
//                     <div className={styles.contactOfficial}>
//                         <span>
//                             Для вступления в Палату кандидату необходимо
//                             предоставить заявление, копию паспорта, резюме и
//                             фотографию кандидата, а также иные документы,
//                             которые кандидат считает нужным приложить, чтобы
//                             подтвердить соответствие критериям, указанным в
//                             Положении о членстве Палаты, утвержденное Протоколом
//                             Общего собрания членов Общественного Объединения
//                             «Палата Независимых Директоров Кыргызской
//                             Республики» от 23 ноября 2024 года.
//                             <br />
//                             <br />
//                             Кандидат в члены Палаты также должен представить
//                             одну письменную рекомендацию (на бумажном или
//                             электронном носителе) от действующих членов Палаты
//                             и/или пройти собеседование с Советом Палаты.
//                             <br />
//                             <br />
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;

//
//
//
//
//
//
//
import React, { useState } from "react";
import styles from "./contact.module.scss";
import Button from "../../../UI/Button/button.jsx";
import instLogo from "../../../../assets/instagram-logo_contact.svg";
import facebookLogo from "../../../../assets/facebook-logo_contact.svg";

const Contact = () => {
    // Начальные значения формы
    const initialFormData = {
        name: "",
        email: "",
        phone: "",
        message: "",
        membership: "active", // Значение по умолчанию
    };

    const [formData, setFormData] = useState(initialFormData);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const scriptURL =
        "https://script.google.com/macros/s/AKfycbxETZlq1ZE4bPuOrRSKL5EvebWGX6QvxPZrBuf18CR-n3c4FQuwzlbVEDagMA49MBs/exec";

    // Обработчик изменений в форме
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Обработчик отправки формы
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        // Создание объекта FormData для отправки
        const form = new FormData();
        Object.keys(formData).forEach((key) => {
            form.append(key, formData[key]);
        });

        // Отправка данных через fetch
        fetch(scriptURL, { method: "POST", body: form })
            .then((response) => {
                setLoading(false);
                if (response.ok) {
                    setSuccessMessage("Ваше сообщение успешно отправлено!");
                    alert("Success! Ваше сообщение успешно отправлено!");
                } else {
                    setErrorMessage("Что-то пошло не так. Попробуйте снова.");
                    alert("Error! Что-то пошло не так.");
                }
            })
            .catch((error) => {
                setLoading(false);
                setErrorMessage("Ошибка при отправке данных!");
                alert("Error! Ошибка при отправке данных.");
            })
            .finally(() => {
                // После отправки сбрасываем форму
                setFormData(initialFormData);
            });
    };

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
                            <br /> ул. Исанова 105/3, 6 этаж, кабинет №2
                        </p>
                        <p>+996 555 888 242, kned.org@gmail.com</p>
                    </div>

                    <div className={styles.contactFormButtonsAndSocial}>
                        <a href="/" className={styles.sDarkLink}>
                            Реквизиты
                        </a>
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
                        name="submit-to-google-sheet"
                        onSubmit={handleSubmit}>
                        <div className={styles.inputBox}>
                            <span className={styles.details}>Ваше имя</span>
                            <input
                                type="text"
                                name="name"
                                placeholder="ФИО"
                                value={formData.name}
                                onChange={handleInputChange}
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
                                value={formData.email}
                                onChange={handleInputChange}
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
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className={styles.textareaBox}>
                            <span>Ваш комментарий</span>
                            <textarea
                                name="message"
                                cols="30"
                                rows="10"
                                placeholder="Комментарий"
                                value={formData.message}
                                onChange={handleInputChange}></textarea>
                        </div>
                        <p>ВСТУПИТЬ В ПАЛАТУ</p>
                        <div className={styles.inputContainer}>
                            <div className={styles.inputWrapper}>
                                <input
                                    type="radio"
                                    id="active"
                                    name="membership"
                                    value="active"
                                    checked={formData.membership === "active"}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="active">Действительное</label>
                            </div>
                            <div className={styles.inputWrapper}>
                                <input
                                    type="radio"
                                    id="associated"
                                    name="membership"
                                    value="associated"
                                    checked={
                                        formData.membership === "associated"
                                    }
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="associated">
                                    Ассоциированное
                                </label>
                            </div>
                        </div>
                        <div className={styles.buttonWrapper}>
                            <Button size="s" variant="outlined" type="submit">
                                {loading ? "ОТПРАВКА..." : "ОТПРАВИТЬ"}
                            </Button>
                        </div>
                    </form>
                    {errorMessage && (
                        <p className={styles.error}>{errorMessage}</p>
                    )}
                    {successMessage && (
                        <p className={styles.success}>{successMessage}</p>
                    )}
                    <div className={styles.contactOfficial}>
                        <span>
                            Для вступления в Палату кандидату необходимо
                            предоставить заявление, копию паспорта, резюме и
                            фотографию кандидата, а также иные документы,
                            которые кандидат считает нужным приложить, чтобы
                            подтвердить соответствие критериям, указанным в
                            Положении о членстве Палаты, утвержденное Протоколом
                            Общего собрания членов Общественного Объединения
                            «Палата Независимых Директоров Кыргызской
                            Республики» от 23 ноября 2024 года.
                            <br />
                            <br />
                            Кандидат в члены Палаты также должен представить
                            одну письменную рекомендацию (на бумажном или
                            электронном носителе) от действующих членов Палаты
                            и/или пройти собеседование с Советом Палаты.
                            <br />
                            <br />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
