import React, {useState, useRef, useEffect} from 'react';
import './test.css';
import {questions} from './questions/questions';
import Options from './options/options';
import Result from '../result_page/result';

function Test() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [selected, setSelected] = useState(null);
    const [msqselected, setMsqselected] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const totalques = questions.length;


    const select = (e) => { if(questions[currentQuestion].msq) 
        { 
            setMsqselected([e].concat(msqselected))
        }else{
            setSelected(e)
        }   
    } 
    const next = () => {
        //logic
        if(questions[currentQuestion].msq)
        {
           if((questions[currentQuestion].answer[0]-1 === msqselected[0] && questions[currentQuestion].answer[1]-1 === msqselected[1]) || (questions[currentQuestion].answer[0]-1 === msqselected[1] && questions[currentQuestion].answer[1]-1 === msqselected[0]))
           {
               console.log("mcq correct")
               setCorrect(correct+1);
           }else{
                console.log("mcq incorrect");
           }
           setMsqselected([]);
        }else{
            if(questions[currentQuestion].answer-1 === selected) 
            {   setCorrect(correct+1);   
                console.log("correct");
            }else{
                console.log("incorrect");
            }
            setSelected(null);
        }
        //color change
        questions[currentQuestion].color = "#3fa176";
        if(currentQuestion<totalques-1) 
        {
            setCurrentQuestion(currentQuestion+1);
        }else{
            setSubmitted(true);
        }
        
    }

    const skip = () =>{
        questions[currentQuestion].color = "#b8baba";
        if(currentQuestion<totalques-1) setCurrentQuestion(currentQuestion+1);
    }

    const submit = () => {
        setSubmitted(true);
    }

    const panelclick = (e) => {
        setCurrentQuestion(e);
    }

    const saveselect = (e) => {
        questions[currentQuestion].selected = e;
    }


    return (
        <div className='test-container'>
             {submitted ? <Result totalques={totalques} correct={correct} incorrect={totalques-correct}/> : 
            <div className='test'>
                <h1>Uassess</h1>
                <div className='test-window'>
                    <div className='test-panel'>
                        <div className='question' >Question {questions[currentQuestion].id}.  {questions[currentQuestion].question} <br/>{(questions[currentQuestion].msq) ? <>Multi Select Question (2 Correct)</> : <></>}</div>
                     
                             <Options  data={questions[currentQuestion]} msq={questions[currentQuestion].msq} saveselect={saveselect} save={select}/>
                    
                        <div className='bottom-panel'>
                            <button className='bottom-btn skip' onClick={skip}>Skip</button>
                           { (currentQuestion !== totalques-1) ? <button className='bottom-btn next' onClick={next}>Next</button>
                            :<button className='bottom-btn submit' onClick={next}>Submit</button>}
                        </div>
                    </div>
                     
                    <div className='ques-panel'>
                        <div className='ques-panel-grid' >
                            {[...Array(totalques).keys()].map((item,index) => {
                            return ( <div className="ques-panel-item"  style={{backgroundColor:questions[index].color}} key={index} onClick={() => panelclick(index)}> {item+1} </div> )})}
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default Test;
