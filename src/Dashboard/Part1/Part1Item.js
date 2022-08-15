import styles from "../Dashboard.module.scss";

function Part1Item ({ title, result, percent, src, name }) {
    return (
        <div className={`${styles.part1Item} ${styles[name]}`}>
            <div>
                <p>{title}</p>
                <h2>{result} <span>{percent}</span></h2>
            </div>
            <div className={styles.iconDiv}> 
                <img src={src} alt='svg' />
            </div>
        </div>
    );
}

export default Part1Item;