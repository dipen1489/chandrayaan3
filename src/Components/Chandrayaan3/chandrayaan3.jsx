import React, { useState } from 'react';
import './chandrayaan3.css';
import Graph from '../Graph/graph'
import ControllerChandrayaan from '../../Controller/Chandrayaan3'

function Chandrayaan3() {

    const [commands, setCommands] = useState('');
    const [result, setResult] = useState({})

    const handleOnChangeInput = (e) => {
        const value = e.target.value
        setCommands(value)
    }

    const handleSendOnClick = () =>{
        const controller = new ControllerChandrayaan([0, 0, 0], 'N')
        const result = controller.execute(commands.split(','));
        setResult(result)
    }

    const resultLabel = () => {
        return `Final Position : (${result.position}) , Final Direction : ${result.direction}`
    }

    return (
        <>
        <div className='container-class'>
            <div className='menu-container'>
                <input className='input-style' name="myInput" value={commands} onChange={handleOnChangeInput}/>
                <button className='button-style' onClick={handleSendOnClick}>Send</button>
                <div style={{fontSize:12, marginTop: '5px'}}>Info: add comma seperated commands "f,b,l,r,u,d" and then click Send</div>
            </div>
            {result?.position && <div className='result-div-style'>{resultLabel()}</div> }
            <div>
                <Graph data={result}/>
            </div>
        </div>
        </>
    );
}

export default Chandrayaan3;
