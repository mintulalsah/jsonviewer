import * as React from "react";
import Link from "next/link";
import styles from "../Footer/Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className={styles.top}>
          <div className={styles.pages}>
            <ul>
              <h3>Top Tools</h3>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.copyRight}>
            <p className="text-center">
              &copy; 2023{" "}
              <a href="https://jsonformatteronline.com/">
                www.jsonformatteronline.com
              </a>{" "}
              All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
