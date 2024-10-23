/* eslint-disable react-hooks/exhaustive-deps */
import { getClans } from "../services/getClans"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { setClan } from "../slices/clanSlice"
function useClans() {
    const clans = useSelector(state => state.clans)
    const dispatch = useDispatch()
    useEffect(() => {
        getClans()
         .then(data => dispatch(setClan(data.clans)))
         .catch(error => console.error(error))
    }, [])
    return { clans }
}
export { useClans }