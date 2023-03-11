import axios, { AxiosRequestConfig } from 'axios';
import { useReducer, useCallback } from 'react'

type Props = {
    isLoading: boolean;
}

const baseUrl = axios.create({
    baseURL: 'http://localhost:5000'
})

export const PutData = (url: string, data?: Object, options?: AxiosRequestConfig) => {

    const initialState: Props = {
        isLoading: false,
    }

    const reducer = (state: any, action: any) => {
        switch(action.type){
            case 'LOADING':
                return {...state, isLoading: action.payload }
            default:
                return state
        }
    }

    const [ state, dispatch ] = useReducer(reducer, initialState)

    const handleSubmit = useCallback(async () => {
        try {
            dispatch({ type: "LOADING", payload: true })
            const res = await baseUrl.put(url, data, options)

            if(res.status === 200){
                dispatch({ type: "LOADING", payload: false })
                
                setTimeout(() => {
                    document.location.reload()
                }, 300)

            }

        } catch(err) {
            if(err){
                console.error(err)
            }
        }
    }, [url, data, options])

    return { state, dispatch, handleSubmit }
}