import './App.css'
import NarutoLogo from '../../assets/naruto.png'
import { Search } from '../../components/Search/Search'
function App() {
  return (
    <header>
      <img src={NarutoLogo} alt="Naruto Logo" />
      <Search />
    </header>
  )
}

export default App
