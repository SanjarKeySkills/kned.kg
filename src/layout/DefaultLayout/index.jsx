import React from "react";
import Header from "../../components/Widget/LayoutsComponentsBlock/Header/header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../../components/Widget/LayoutsComponentsBlock/Footer/footer.jsx";
import styles from "./index.module.scss";

export const ContentFallback = () => <div className={styles.loader}></div>

const DefaultLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <div className={styles.content}>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
};

export default DefaultLayout;
