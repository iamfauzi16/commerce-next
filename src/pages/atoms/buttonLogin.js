import Styles from '../../styles/button.module.css'

const Button = (props)=> {
  return <button className={Styles.bodyButton}>{props.name}</button>

}


export default Button