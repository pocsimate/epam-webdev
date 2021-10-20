import React from 'react';
import { useNavigation } from 'react-navi';
import './navigation.scss';

export const Navigation = () => {
    const { navigate } = useNavigation();
    return <nav className='navigation'>
        <ul className="nav-items">
            <li>
                <button onClick={() => navigate('/')}>Home</button>
            </li>
            <li>
                <button onClick={() => navigate('/counter')}>Counter</button>
            </li>
            <li>
                <button onClick={() => navigate('/fetch')}>Fetch</button>
            </li>
        </ul>
    </nav>
};
