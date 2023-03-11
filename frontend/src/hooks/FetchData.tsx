import { useCallback, useEffect, useState } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

const baseUrl = axios.create({
    baseURL: "http://localhost:5000"
})

export function FetchData<T>(url: string, options?: AxiosRequestConfig){
    const [data, setData] = useState<T | undefined>()
    const [isError, setIsError] = useState<Error | undefined>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleFetch = useCallback(async () => {
        setIsLoading(true)
        baseUrl.get(url, options)
            .then((res) => setData(res.data))
            .catch((err) => setIsError(err))
            .finally(() => setIsLoading(false))
    }, [url, options])

    useEffect(() => {
       handleFetch()
    }, [])

    return { data, isError, isLoading }
}