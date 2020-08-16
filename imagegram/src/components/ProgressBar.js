import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import UseStorage from '../hooks/UseStorage';

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = UseStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null)
        }
    }, [url, setFile])

    return (
        <motion.div className='progress-bar'
            initial={{ width: 0 }}
            animate={{ width: progress + "%" }}
        ></motion.div>
    )
}

// style={{ width: progress + '%' }}

export default ProgressBar;