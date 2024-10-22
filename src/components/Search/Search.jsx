import './search.css'
import { IoSearch } from "react-icons/io5";

function Search() {
 return (
    <section className='search-header-main-container'>
        <section className='search-container'>
        <input type="text" className='header-main-search' placeholder='Your favorite characters, clans, akatsukis'/>
        <IoSearch size={25} style={{cursor: 'pointer'}}/>
        </section>
        <select name="type">
            <option value="all">All</option>
            <option value="characters">Character</option>
            <option value="clans">Clan</option>
            <option value="akatsukis">Akatsuki</option>
        </select>
    </section>
 )
}
export { Search }