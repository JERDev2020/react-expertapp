import React from 'react'

export const GifGridItem = ({title,url}) => {
   
    return (
        <div className='card animate__animated animate__animate__rollIn'>
            <img src={url}></img>
            <p>{title}</p>
        </div>
    )
}
