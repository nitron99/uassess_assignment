import React, {useState, useRef, useEffect} from 'react';
import './options.css';

const Options = ({ data, msq, saveselect , save}) => {

    const [select, setSelect] = useState(data.selected);
    const [msqselect, setMsqselect] = useState(data.selected);

    const clickHandler = (e) => {
      if(msq)
      {
        setMsqselect([e].concat(msqselect))
        //savemsqselect(e);
        save(e);
      }else{
        setSelect(e);
        saveselect(e);
        save(e);
      }
     
    }

    const didMountRef = useRef(false)

  useEffect(() => {
    if (didMountRef.current) {
      setSelect(data.selected)
      saveselect(data.selected);
      setMsqselect(data.selected)
    } else didMountRef.current = true
    }
  ,[data.options])
      return (
        <div>
        {data.options.map((item, index) => {
          return (
            <div ref={didMountRef} className={msq ? (msqselect[0] === index || msqselect[1] === index ) ? 'options-container selected-container' : 'options-container' : (select === index) ? 'options-container selected-container' : 'options-container' } key={index} onClick={()=> clickHandler(index)} >
              {index+1}. {item}
              </div>
          )
        })}

      </div>
    )
  }

export default Options;
