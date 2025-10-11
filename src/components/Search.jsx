import { useState } from "react";
import styles from "./Search.module.css";
import { CiSearch } from "react-icons/ci";

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            if (onSearch) {
                onSearch(query);
            } else {
                alert(`Searching for: ${query}`);
            }
        }
    };

    return (
        <form className={styles.searchBar} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <button type="submit" aria-label="Search">
                <CiSearch />
            </button>
        </form>
    );
};

export default Search;
