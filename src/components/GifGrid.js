import React,{useState,useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGif } from '../helpers/GetGifs';
import { GifGridItem } from './GifGridItem';
// import moduleName from '../GifExpertApp'

export const GifGrid = ({category}) => {
//con el siguiente codigo soluciono el echo de que se llaman muchas veces a una api, 
//funciona como un didmount
//     useEffect(()=>{
//         getGif({category}).then(setimages)

//     },[category]);
//    const [images, setimages] = useState([])
   
   const {data, loading}= useFetchGifs(category);
    return (
        <>
         <h3 className='animate__animated animate__animate__rollIn'>{category}</h3>

         {loading&&<h2 className='animate__animated animate__animate__flasher'>Cargando</h2>}
        <div className='cardGrid'>

           

          
            {
                data.map((img)=>(
                   <GifGridItem {...img} key={img.id}></GifGridItem>

                ))
            } 
          
            
        </div>
        </>
    )
}
