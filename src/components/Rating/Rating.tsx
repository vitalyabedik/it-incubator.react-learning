import React from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')

    return (
        <div>
            <Star onClick={props.onClick} selected={props.value > 0} value={1}/>
            <Star onClick={props.onClick} selected={props.value > 1} value={2}/>
            <Star onClick={props.onClick} selected={props.value > 2} value={3}/>
            <Star onClick={props.onClick} selected={props.value > 3} value={4}/>
            <Star onClick={props.onClick} selected={props.value > 4} value={5}/>
        </div>
    )
}

type StarPropsType = {
    value: RatingValueType
    selected: boolean
    onClick: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {
    console.log('Star rendering')

    return <span onClick={() => {
        props.onClick(props.value)
    }}>{props.selected ? <b>star</b> : 'star'}</span>
}