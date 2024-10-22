import './App.css'
import NarutoLogo from '../../assets/naruto.png'
import { Search } from '../../components/Search/Search'
import { Characters } from '../../components/Characters/Characters'
function App() {
  return (
    <header>
      <img src={NarutoLogo} alt="Naruto Logo" />
      <Search />
      <Characters />
    </header>
  )
}

export default App
