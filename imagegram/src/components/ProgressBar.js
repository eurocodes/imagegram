import React from 'react';
import UseStorage from '../hooks/UseStorage';

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = UseStorage(file);
    console.log(progress, url);

    return (
        <div className='progree-bar'>Progress</div>
    )
}

export default ProgressBar;