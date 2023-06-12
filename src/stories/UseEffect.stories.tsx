import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}

export const SetIntervalExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample')

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('setTimeout')
    //         document.title = counter.toString()
    //     }, 1000)
    // }, [counter])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <>
        Hello, counter: {counter} - fake: {fake}
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
    </>
}


export const ClockExample = () => {
    const [time, setTime] = useState(new Date())
    // const [timeId, setTimeId] = useState(undefined)

    const currentTime = time.toLocaleTimeString('ru-RU', {
        hour: 'numeric', minute: 'numeric', second: 'numeric',
    })

    useEffect(() => {

        const timeId = setInterval(() => {
            setTime(new Date())
            console.log(currentTime)
        }, 1000)

        return () => clearInterval(timeId)
    }, [])

    return <>
        {currentTime}
    </>
}


export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('Component rendered')

    useEffect(() => {
        console.log('Effect occured' + counter)

        return () => {
            console.log('RESET EFFECT')
        }
    }, [counter])

    const increase = () => setCounter(counter + 1)

    return <>
        Hello, counter: {counter}
        <button onClick={increase}></button>
    </>
}


export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.code)
            setText(text => text + e.code)
        }

        window.document.addEventListener('keypress', handler)

        return () => {
            window.document.removeEventListener('keypress', handler)
        }
    }, [])

    return <>
        Typed, text: {text}
    </>
}


export const SetTimeoutExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered' + text)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('TIMEOUT EXPIRED')
            setText('3 seconds passed')
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])

    return <>
        Typed, text: {text}
    </>
}