import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [datas, setData] = useState([])
    const [showAll,setShowAll] = useState(false)

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
            const data = await res.json()
            // console.log(data.data.tools)
            setData(data.data.tools)
        }
        loadData()
    }
        , [])
    return (
        <>
        <div className='grid md:grid-cols-3 gap-4 md:px-6 md:my-4'>
            {
                datas.slice(0, setShowAll ? 12 : 6).map(data => {
                    console.log(data)
                    return <SingleData  Singledata = {data} ></SingleData>
                })
            }
        </div>
        </>
    );
};

export default Card;