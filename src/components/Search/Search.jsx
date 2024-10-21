import './search.css'
import { IoSearch } from "react-icons/io5";

function Search() {
 return (
    <section className='search-container'>
        <input type="text" className='header-main-search' placeholder='Your favorite characters, clans, akatsuki'/>
        <IoSearch size={25}/>
    </section>
 )
}
export { Search }