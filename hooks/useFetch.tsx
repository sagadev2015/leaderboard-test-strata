import { useState, useEffect } from 'react'

const fetchIntervalTimer: any = {}

export const useFetch = (url: string, fetchIntervalTime: number = 0) => {
    const [result, setResult] = useState<any>(null)
    const [error, setError] = useState<any>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        fetchData()

        if (!fetchIntervalTimer[url] && fetchIntervalTime > 0) {
            fetchIntervalTimer[url] = setInterval(fetchData, fetchIntervalTime)
        }

        return () => {
            if (fetchIntervalTimer[url]) {
                clearInterval(fetchIntervalTimer[url])
                fetchIntervalTimer[url] = null
            }
        }
    }, [url])

    const fetchData = async () => {
        setIsLoading(true)

        try {
            const apiResponse = await fetch(url)
            const json = await apiResponse.json()
            setResult(json)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    return { result, error, isLoading }
}