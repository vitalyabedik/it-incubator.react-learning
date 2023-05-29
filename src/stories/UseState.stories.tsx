import React, {useMemo, useState} from 'react';

export default {
    title: 'useState demo'
}

function generateData() {
    // difficult counting
    console.log('generateData')
    return 23453425345
}

export const Example1 = () => {
    console.log('Example1')

    const [counter, setCounter] = useState(generateData)

    // const initValue = generateData()
    // const initValue = useMemo(generateData, [])
    // const [counter, setCounter] = useState(initValue)

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}