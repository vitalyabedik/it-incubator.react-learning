import {useState} from 'react';


export const OnOff = () => {
    const [isOn, setIsOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: isOn ? 'green' : 'white'
    }

    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: isOn ? 'white' : 'red'
    }

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: isOn ? 'green' : 'red'
    }

    return (
        <div>
            <div onClick={() => {setIsOn(true)}} style={onStyle}>On</div>
            <div onClick={() => {setIsOn(false)}} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}