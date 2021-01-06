export const getGif=async(category)=>{
    const url=`https://api.giphy.com/v1/gifs/search?limit=10&q=${category}&api_key=FttVsFkk38UkR6csEWFgZqqfIEEt9BtP`
  const resp= await fetch(url);
  const {data}=await resp.json();

const gifs=data.map((img)=>{
return{
   id:img.id,
   title:img.title,
   url:img.images.downsized_medium.url

}

})
return gifs;

}