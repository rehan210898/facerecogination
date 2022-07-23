import React from "react";
import './Frame.css';
import Box from "../box/Box";

const Frame = ({ url,box }) => {
  return (
    <div className='center ma'>
  <div className='absolute mt2'>
    <img id ='image' alt='' src={url} width='500px' height='auto' />
    {box[0]==['1']?console.log('waiting'):box.map((user,i)=>{
      return <Box position={box[i].region_info.bounding_box}/>
    })}
    </div>
</div>
    
    
  );
};

export default Frame;
