import * as React from "react";
import Link from "next/link";
import styles from "../Footer/Footer.module.css";


export default function Footer() {
    return (
        <>
      
        <div className={styles.footer}>
        <div className={styles.top}>
          <div className="pages">
            <ul>
              <h3>Top Tools</h3>
              <li>
              <Link className={styles.link_tag} href="/">
          Home
        </Link>
              </li>
              <li>
              <Link className={styles.link_tag} href="/json-formatter-online">
          json formatter online
        </Link>
              </li>
              <li>
              <Link className={styles.link_tag} href="/">
          Home
        </Link>
              </li>
              <li>
              <Link className={styles.link_tag} href="/">
          Home
        </Link>
              </li>
             
            </ul>
            {/* <ul>
              <h3>Careers</h3>
              <li>
                <a href="#">Apply Online</a>
              </li>
              <li>
                <a href="#">Available Positions</a>
              </li>
            </ul> */}
            {/* <ul>
              <h3>About Us</h3>
              <li>
                <a href="#">Meet Our Team</a>
              </li>
              <li>
                <a href="#">Our Responsibilities</a>
              </li>
              <li>
                <a href="#">Our Codes</a>
              </li>
              <li>
                <a href="#">Our Values</a>
              </li>
            </ul> */}
          </div>
          {/* <div className="newsletter">
            <h3>Stay in Touch</h3>
            <form>
              <input
                type="email"
                name="newsletter_email"
                id="newsletter_email"
                placeholder="Email"
              />
              <input type="button" defaultValue="Submit" />
            </form>
          </div> */}
        </div>
      
        <div className={styles.info}>
         
          <p>
				Copyright © 2023 <a className={styles.link_tag} href="https://onlinejsonviewer.com/"> www.onlinejsonviewer.com </a> All Rights Reserved. 
				</p>
         
        </div>
      </div>
      </>
    );
}
