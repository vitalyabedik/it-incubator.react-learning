import React, {useState} from 'react';


type PropsType = {
    onChange: (on: boolean) => void
}

export const UncontrolledOnOffMemoized = (props: PropsType) => {
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

    const onClicked = () => {
        setIsOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setIsOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div onClick={onClicked} style={onStyle}>On</div>
            <div onClick={offClicked} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export const UncontrolledOnOff = React.memo(UncontrolledOnOffMemoized)