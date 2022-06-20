import styles from '../styles/About.module.css';
import Link from 'next/link';

export default function About()
{
	return (
				<div className={styles.bio}>
				<h1>About Me !!</h1>

				<table border="1" cellSpacing="0" cellPadding="5" align="center">
					<tr>
						<th>Name</th>
						<td>Varsha Saxena</td>
					</tr>
					<tr>
						<th>Email</th>
						<td>Varsha@gmail.com</td>
					</tr>
					<tr>
						<th>Profession</th>
						<td>Technical Trainer</td>
					</tr>
					<tr>
						<th>Languages</th>
						<td>Hindi, English</td>
					</tr>
				</table>

				<h4>To Know more About me Please Click  
				<Link href="/contact"><a className={styles.clickme}> Contact</a></Link>
				</h4>
				</div>
		)
}