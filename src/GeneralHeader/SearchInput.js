import styles from "./GeneralHeader.module.scss";
import search from "../assets/images/search.svg";

function SearchInput () {
    return (
        <div className={styles.searchInput}>
            <img src={search} alt='svg' />
            <input 
                type="text"
                placeholder="Type here..."
            />
        </div>
    );
}

export default SearchInput;