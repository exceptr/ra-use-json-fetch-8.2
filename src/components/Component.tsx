import useJsonFetch from "./useJsonFetch";

export default function Component<T = any>({url, opts}: {url: string, opts?: any}) {
    const {data, loading, error } = useJsonFetch<T>({url, opts});

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error</div>
    }

    return <div>{data?.status}</div>
}