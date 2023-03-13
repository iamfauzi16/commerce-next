import Styles from '../../styles/header.module.css'

import Data from '../api/data'
import Button from '../atoms/button'

export default function Header() {
  return(
    <>
    <div className={Styles.HeaderBody}>
      <div className={Styles.leftBody}>
        <h3 className={Styles.fontHeading}>{Data.heading}</h3>
        <p className={Styles.fontBody}>{Data.body}</p>
        <Button name="Shope Now!" model="Pertama"/> 
      </div>
    </div>
    </>
  )
}