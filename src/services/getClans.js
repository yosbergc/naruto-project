function getClans() {
    return fetch('https://narutodb.xyz/api/clan')
        .then(res => {
            if (!res.ok) {
                throw new Error('Hubo un error')
            }
            return res.json()
        })
        .then(data => data)
        .catch(error => error)
}
export { getClans }