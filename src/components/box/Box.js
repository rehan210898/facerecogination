import React from "react";

const Box = ({ position }) => {
    const image = document.getElementById('image')
           let leftPosition = (Number(image.width)*position.left_col);
           
           let rightPosition = Number(image.width) - (Number(image.width)*position.right_col);
            
           let topPosition = (Number(image.height)*position.top_row);
           
           let  bottomPosition = Number(image.height) - (Number(image.height)*position.bottom_row);
          
        return( <div className="bounding-box" style={{top:topPosition,right:rightPosition,bottom:bottomPosition, left:leftPosition}}></div>
        )
}

export default Box;
