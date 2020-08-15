import React from 'react';
import useFireStore from '../hooks/UseFireStore';

const ImageGrid = () => {
    const { docs } = useFireStore('images');
    console.log(docs)

    return (
        <div className='img-grid'>
            {docs && docs.map(doc => (
                <div className='img-wrap' key={doc.id}>
                    <img src={doc.url} alt='Imagram Image' />
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;