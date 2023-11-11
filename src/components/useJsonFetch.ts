import { useEffect, useState } from "react"
interface JsonFetchResult<T> {
    data: {status: string} | null;
    loading: boolean;
    error: Error | null;
}
export default function useJsonFetch<T = any>({url, opts}: {url: string, opts: any}) : JsonFetchResult<T> {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(url, opts);
            const result = await response.json();
            setData(result);
        } catch (error: Error | any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
        return () => {
            
        }
    }, [url, opts])
    
    return {data, loading, error}
}