import React,{useState} from 'react'
import GifExpertApp from '../GifExpertApp'

export const AddCategory = ({setCategory}) => {
    const [inputValue, setinputValue] = useState('');
    const handleInputChange=(e)=>{
        
        setinputValue(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategory(cat=>[inputValue,...cat]);
           setinputValue('');
        }
      
           }
               return (
        <form onSubmit={handleSubmit}>
        
          <input 
          type="text" 
          value={inputValue}
          onChange={handleInputChange}
          
          />
          
        </form>
    )
}
