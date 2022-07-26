import React from "react";
import './ImageLinkForm.css'


const ImageLinkForm = ({onSearchChange,onButtonClick}) => {
  return (
    <div>
      <p className="f3 tc">
    {'This magic brain will detect faces in your pictures'}
      </p>
      <div className="center">
        <div className="form center pa3 br4 shadow-5">
            <input className="f4 pa2 w-70 center" type="text" onChange={onSearchChange}/>
            <button className="w-30 grow f4 link ph3 pv2 dib bg-dark-green" onClick={onButtonClick}>Find</button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
