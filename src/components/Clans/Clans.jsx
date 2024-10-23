import './clans-container.css'
import { useClans } from '../../hooks/useClans'
import { CardSingle } from '../CardSingle/CardSingle'
function Clans() {
    const { clans } = useClans()
    return (
        <section className="clans-container">
            <h2>Clans</h2>
            <section className="clans-inner">
                {
                    clans.length > 0 && clans.map(clan => {
                        return <CardSingle
                        name={clan.name}
                        key={clan.id}
                    />
                    })
                }
            </section>
        </section>
    )
}
export { Clans }