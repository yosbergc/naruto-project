function getCharacters() {
    return fetch('https://narutodb.xyz/api/character')
        .then(res => {
            if (!res.ok) {
                throw new Error('Hubo un error')
            }
            return res.json()
        })
        .then(data => data.characters)
        .catch(error => error)
}
export { getCharacters }