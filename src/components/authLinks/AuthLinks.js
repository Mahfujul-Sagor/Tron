"use client"

import Link from 'next/link';
import React from 'react';
import styles from './authLinks.module.css'

import { useState } from'react';
import { signOut, useSession } from 'next-auth/react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';


export default function AuthLinks() {

  const {status} = useSession();

  const {theme} = useTheme();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  const handleLogout = () => {
    signOut();
  };

  return (
    <>
      {(status === 'unauthenticated') ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <form className='flex gap-[20px]'>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span onClick={handleLogout} className={styles.link}>
            Logout
          </span>
        </form>
      )}
      <div className={`${styles.burger}`} onClick={handleOpen}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      {open && (
        <div className={`${styles.responsiveMenu}`} style={theme === 'light' ? {background: "#FFFFFF"} : {background: "#121212"}}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          {status === "unauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link} onClick={handleLogout}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  )
}
