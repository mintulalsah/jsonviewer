import * as React from "react";
import Link from "next/link";
import styles from "../Footer/Footer.module.css";


export default function Footer() {
    return (
        <>
      
        <div className={styles.footer}>
    
        <div className={styles.info}>
         
          <p>
				Copyright © 2023 <a className={styles.link_tag} href="https://onlinejsonviewer.com/"> www.onlinejsonviewer.com </a> All Rights Reserved. 
				</p>
         
        </div>
      </div>
      </>
    );
}
