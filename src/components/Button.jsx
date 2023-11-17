import styles from "./Button.module.css";
function Button({children, onClick, type}) {
    return (
        // ${styles[type]} is how we access classname type  
        <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
            {children}
        </button>
    )
}

export default Button
