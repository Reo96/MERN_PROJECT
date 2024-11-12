import { useState ,useEffect} from 'react';
import {useContentStore} from'../store/content';
import axios from 'axios';

const GetTrendingContent = () => {
    const [trendingContent, setTrendingContent]=useState(null);
    const {contentType}=useContentStore();

    useEffect(()=>{
        const getTrendingContent = async ()=>{
            const res=await axios.get(`/api/v1/${contentType}/trending`)
            setTrendingContent(res.data.content)
        }
        getTrendingContent();
    }, [contentType]);
    return {trendingContent};
}
export default GetTrendingContent;
