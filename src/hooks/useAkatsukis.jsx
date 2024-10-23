/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getAkatsukis } from '../services/getAkatsukis'
import { setAkatsuki } from "../slices/akatsukiSlice"
function useAkatsukis() {
    const akatsukis = useSelector(state => state.akatsukis)
    const dispatch = useDispatch()

    useEffect(() => {
        getAkatsukis()
         .then(data => dispatch(setAkatsuki(data.akatsuki)))
    }, [])

    return { akatsukis }
}
export { useAkatsukis }