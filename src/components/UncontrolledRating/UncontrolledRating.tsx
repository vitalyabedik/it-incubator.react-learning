import React, {useState} from 'react';

export function UncontrolledRating() {
    console.log('Rating rendering')

    const [value, setValue] = useState(3)

    const onClickValueHandler = (value: number) => {
        setValue(value)
    }

    return (
        <div>
            <Star id={1} onClickValueHandler={onClickValueHandler} selected={value > 0}/>
            <Star id={2} onClickValueHandler={onClickValueHandler} selected={value > 1}/>
            <Star id={3} onClickValueHandler={onClickValueHandler} selected={value > 2}/>
            <Star id={4} onClickValueHandler={onClickValueHandler} selected={value > 3}/>
            <Star id={5} onClickValueHandler={onClickValueHandler} selected={value > 4}/>
        </div>
    )
}

type StarPropsType = {
    id: number
    selected: boolean
    onClickValueHandler: (value: number) => void
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    return (
        <div>
            {props.selected
                ?
                <span onClick={() => props.onClickValueHandler(props.id)}><b>star </b></span>
                :
                <span onClick={() => props.onClickValueHandler(props.id)}>star </span>}
        </div>
    )
}