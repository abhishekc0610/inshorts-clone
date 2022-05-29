
import { useEffect, useState } from 'react';

import { Box } from '@mui/material';

import { getNews } from '../servive/api';

import Article from './Article';


const Articles = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        dailyNews();
    }, []);    

    const dailyNews = async () => {
        let response = await getNews();
        setNews(response.data);
    }

    return (
        <Box>
            {
                news.map(data => {
                    return <Article data={data} />
                })
            }
        </Box>
    )
}

export default Articles;