"use client";

import React from "react";
import styles from "./page.module.css"; // use simple styles for demonstration purposes
import Chat from "../../components/chat";
import Image from "next/image";
const Home = () => {
  return (
  

    <main className={styles.main}>

         
      <div className={styles.container}>

        <Chat />
      </div>
    </main>
  );
};

export default Home;
