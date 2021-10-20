import React from 'react';
import './home.scss'

interface HomeProps {
    name: string;
    location: string;
    age: number;
};

export const Home = ({ name, age, location }: HomeProps) => {
    return <div className='home-container'>
        <div>Name: {name}</div>
        <div>Age: {location}</div>
        <div>Location: {age}</div>
    </div>
}