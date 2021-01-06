import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import PropTypes from 'prop-types'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    

    const [category, setCategory] = useState(["Goku"]);

    // const handleAdd=()=>{
    //     setCategory([...category,"Hunter"])


    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={setCategory}/>
            <hr/>
            <ol>{
                category.map(cate=>(
                <GifGrid category={cate} key={cate}/>

                ))
            }
            </ol>



        </>
    )
}
AddCategory.propTypes={
    setCategory:PropTypes.func.isRequired
}