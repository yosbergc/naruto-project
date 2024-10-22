import './characters.css'
import { useCharacters } from '../../hooks/useCharacters'
import { CardSingle } from '../CardSingle/CardSingle'
function Characters() {
    const { characters } = useCharacters()
    return (
        <section className="characters-container">
            <h2>Characters</h2>
            <div className="characters-inner">
                {
                    characters.length > 0 && characters.map(character => {
                        return <CardSingle 
                            key={character.id}
                            name={character.name}
                            image={character.images[0]}
                        />
                    })
                }
            </div>
        </section>
    )
}
export { Characters }