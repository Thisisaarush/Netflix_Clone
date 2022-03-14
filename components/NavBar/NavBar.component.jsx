import React, { useState } from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export const NavBar = ({ username }) => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push("/");
  };
  const handleOnClickMyList = (e) => {
    e.preventDefault();
    router.push("/browse/my-list");
  };
  const handleShowDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.logoLink}>
          <a>
            <Image
              className={styles.logoWrapper}
              src="/netflix.svg"
              alt="brand logo"
              width="100px"
              height="50px"
            />
          </a>
        </Link>
        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>

        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}>{username}</p>
              <Image
                src="/expand.svg"
                alt="expand"
                width="25px"
                height="25px"
              />
            </button>
            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <Link className={styles.linkName} href="/login">
                    <a>Sign Out</a>
                  </Link>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};
