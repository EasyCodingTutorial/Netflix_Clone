import React from 'react'

import styles from './Navbar.module.css'

import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>

            <Link href='/' className={styles.LogoParent}>
                <Image
                    src={"/assets/logo.png"}
                    alt='Logo'
                    height={150}
                    width={150}
                />
            </Link>

        </nav>
    )
}

export default Navbar