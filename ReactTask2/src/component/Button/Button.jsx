import styles from './Button.module.css'

const Button=({icons,text,isOutline,...rest})=>{
  return(
    <button {...rest}
      className={`${styles.btn} 
      ${isOutline ? styles.outline_btn : styles.primary_btn}`}
    >
      {icons}
      {text}
    </button>
  )
}

export default Button
