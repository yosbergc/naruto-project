import './akatsukis.css'
import { useAkatsukis } from '../../hooks/useAkatsukis'
import { CardSingle } from '../CardSingle/CardSingle'
function Akatsukis() {
    const { akatsukis } = useAkatsukis()
    return (
        <section className="akatsukis-container">
            <h2>Akatsukis</h2>
            <section className="akatsukis-inner">
                {
                    akatsukis.length > 0 && akatsukis.map(akatsuki => {
                        return <CardSingle 
                            key={akatsuki.id}
                            name={akatsuki.name}
                            image={akatsuki.images[0]}
                        />
                    })
                }
            </section>
        </section>
    )
}
export { Akatsukis }