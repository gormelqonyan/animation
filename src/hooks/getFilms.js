import {useEffect, useState} from "react";

const GetFilm = () => {
    const [loading, setLoading] = useState(true);
    const [filmsData, setFilmsData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/items?_page=1&_limit=4")
            .then(response => response.json())
            .then(data => {
                setFilmsData(data)
            }).finally(() => {
            setLoading(false);
        });
    }, [])

    return {
        filmsData,
        loading
    }

}

export default GetFilm