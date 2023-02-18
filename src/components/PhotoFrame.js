import React from 'react';

export const PhotoFrame = (props) => {
    return (
        <div className='photoframe'>
            <img src={props.url} />
            <div className='caption'>{props.title}</div>
            
        </div>
    )
}