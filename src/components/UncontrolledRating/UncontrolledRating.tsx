import React, {useState} from 'react';
import {UncontrolledOnOffMemoized} from '../UncontrolledOnOff/UncontrolledOnOff';

export function UncontrolledRatingMemoized() {
    console.log('Rating rendering')

    const [value, setValue] = useState(3)

    return (
        <div>
            <Star setValue={() => setValue(1)} selected={value > 0}/>
            <Star setValue={() => setValue(2)} selected={value > 1}/>
            <Star setValue={() => setValue(3)} selected={value > 2}/>
            <Star setValue={() => setValue(4)} selected={value > 3}/>
            <Star setValue={() => setValue(5)} selected={value > 4}/>
        </div>
    )
}

export const UncontrolledRating = React.memo(UncontrolledRatingMemoized)

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function StarMemoized(props: StarPropsType) {
    console.log('Star rendering')

    return <span onClick={() => props.setValue()}>{props.selected ? <b>star </b> : 'star '}</span>

}

export const Star = React.memo(StarMemoized)