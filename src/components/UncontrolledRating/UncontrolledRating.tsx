import React, {useState} from 'react';

export function UncontrolledRating() {
    console.log('Rating rendering')

    const [value, setValue] = useState(0)

    const onClickValueHandler = (value: number) => {
        setValue(value)
    }

    return (
        <div>
            <Star selected={value > 0}/><button onClick={() => onClickValueHandler(1)}>1</button>
            <Star selected={value > 1}/><button onClick={() => onClickValueHandler(2)}>2</button>
            <Star selected={value > 2}/><button onClick={() => onClickValueHandler(3)}>3</button>
            <Star selected={value > 3}/><button onClick={() => onClickValueHandler(4)}>4</button>
            <Star selected={value > 4}/><button onClick={() => onClickValueHandler(5)}>5</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log('Star rendering')

    if (props.selected === true) {
        return (
            <span><b>star </b></span>
        )
    } else {
        return (
            <span>star </span>
        )
    }
}