import Link from 'next/link'
import styles from '../../styles/navbar.module.css'
import Button from '../atoms/button'


export default function Navbar() {
  return(
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <h4>E-Commerce</h4>
      </div>
      <div>
        <ul className={styles.link}>
          <li><Link className={styles.linkLi} href="/">Shop</Link></li>
          <li><Link className={styles.linkLi} href="/">Promo</Link></li>
          <li><Link className={styles.linkLi}href="/">New Arrival</Link></li>
          <li><Link className={styles.linkLi}href="/">Brand</Link></li>
        </ul>
      </div>
      <div className={styles.right}>
        <input placeholder="Search"></input>
        <Button name="Register"/>
        <Button name="Login"/>


      </div>
    </nav>
  )
}