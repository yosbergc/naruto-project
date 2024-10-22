/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCharacters } from "../services/getCharacters"
import { setCharacter } from "../slices/characterSlice"
function useCharacters() {
    const characters = useSelector(state => state.characters)
    const dispatch = useDispatch()
    useEffect(() => {
        getCharacters()
          .then(data => {
            dispatch(setCharacter(data))
          })
          .catch(error => console.error(error))
    }, [])

    return { characters }
}
export { useCharacters }