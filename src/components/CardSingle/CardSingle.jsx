/* eslint-disable react/prop-types */
import './cardsingle.css'
import Unknow from '../../assets/unknow.jpg'
function CardSingle({ name, image = Unknow }) {
    return (
        <article className='card-single'>
            <img src={image} alt={name} />
            <h3>{name}</h3>
        </article>
    )
}
export { CardSingle }