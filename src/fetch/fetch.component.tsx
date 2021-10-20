import React, { useState } from 'react';
import './fetch.scss';

interface Computer {
    id: number;
    uid: string;
    platform: string;
    type: string;
    os: string;
    stack: string;
};

export const FetchComponent = () => {

    const [apiData, setApiData] = useState<Computer | undefined>(undefined);

    const fetchApiData = async () => {
        const responseObject: Response = await fetch("https://random-data-api.com/api/computer/random_computer");
        const jsonData: Computer = await (responseObject.json());
        setApiData(jsonData);
    };

    return <div className='fetch-container'>
        <button className='fetch-button' onClick={fetchApiData}>Fetch</button>
        {apiData &&
            <button className='clear-button' onClick={() => setApiData(undefined)}>Clear</button>
        }
        {apiData && 
        <div className='computer-info'>
            <div className='computer-id'>{apiData.id}</div>
            <div className='computer-uid'>{apiData.uid}</div>
            <div className='computer-type'>{apiData.type}</div>
            <div className='computer-platform'>{apiData.platform}</div>
            <div className='computer-stack'>{apiData.stack}</div>
            <div className='computer-os'>{apiData.os}</div>
        </div>
        }
    </div>
};