import React,{useRef, useEffect} from 'react';
import './ques_panel.css';
import {Link} from 'react-router-dom';

function QuesPanel({total, click, color}) {

    const colour = useRef(0);
    
    useEffect(() => {
        if(color === 0){
            colour.current.style.backgroundColor = "red";
        } 
    },[])

    const clickHandler = (index) => { 
       click(index);
    }

    return (
        <div className='ques-panel-grid'>
          {[...Array(total).keys()].map((item,index) => {
              return ( <div ref={colour} className="ques-panel-item" key={index} onClick={() => clickHandler(index)}> {item+1} </div> )})}

          </div>
    )
}

export default QuesPanel;
