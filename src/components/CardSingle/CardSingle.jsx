import './cardsingle.css'
function CardSingle({ name, image, debut }) {
    return (
        <article className='card-single'>
            <img src={image} alt={name} />
            <h3>{name}</h3>
        </article>
    )
}
export { CardSingle }