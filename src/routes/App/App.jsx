import './App.css'
import NarutoLogo from '../../assets/naruto.png'
import { Search } from '../../components/Search/Search'
import { Characters } from '../../components/Characters/Characters'
import { Clans } from '../../components/Clans/Clans'
import { Akatsukis } from '../../components/Akatsukis/Akatsukis'
function App() {
  return (
    <header>
      <img src={NarutoLogo} alt="Naruto Logo" />
      <Search />
      <Characters />
      <Clans />
      <Akatsukis />
    </header>
  )
}

export default App
