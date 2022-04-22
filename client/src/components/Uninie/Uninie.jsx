import React from 'react';
import style from './Uninie.module.css'

function Uninie(props) {
  return (
    <div className={style.uninie}>
      
     <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/yFXnfrN91t8?autoplay=1" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
     </iframe>
     
    </div>
  );
}

export default Uninie;
