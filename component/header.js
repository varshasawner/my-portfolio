import styles from '../styles/Header.module.css';
import Link from 'next/link';

export default function Header(){
	return (
		<header className={styles.box}>
			<div className={styles.logo}>My Portfolio</div>
			<nav className={styles.nav}>
				<Link href="/">
					<a className={styles.hyperlink}>Home</a>
				</Link>
				<Link href="/about">
					<a className={styles.hyperlink}>About</a>
				</Link>
				<Link href="/contact">
					<a className={styles.hyperlink}>Contact</a>
				</Link>
			</nav>
		</header>
	)
}