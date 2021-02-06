import styles from './SearchInput.module.css'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
const SearchInput=({...rest})=>{
    
    return <div className={styles.wrapper}>
        <SearchRoundedIcon/>
        <input className={styles.input} {...rest}/>
    </div>
}
export default SearchInput;