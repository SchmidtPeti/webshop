import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Klasszikus könyvek</h1>
                    <span className='subtitle'>Vásárlás</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Pszichológiai könyvek</h1>
                    <span className='subtitle'>Vásárlás</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Romantikus regények</h1>
                    <span className='subtitle'>Vásárlás</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Szak irodalom</h1>
                    <span className='subtitle'>Vásárlás</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Antik könyvek</h1>
                    <span className='subtitle'>Vásárlás</span>
                </div>
            </div>
        </div>
    </div>    
);

export default HomePage;