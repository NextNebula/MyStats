import React from 'react'
import { Movie } from './Types/Movie';

//TODO: Refactor to not only work for one url
export const useApi = () => {
    const [data, setData] = React.useState<Array<Movie>>([]);

    React.useEffect(() => {
        fetch("/movie")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch(() => {
                setData([]);
            });
    }, []);

    return data;
};