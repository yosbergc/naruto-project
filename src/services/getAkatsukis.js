function getAkatsukis() {
    return fetch('https://narutodb.xyz/api/akatsuki')
        .then(res => {
            if (!res.ok) {
                throw new Error('Hubo un error')
            }
            return res.json()
        })
        .then(data => data)
        .catch(error => error)
}
export { getAkatsukis }