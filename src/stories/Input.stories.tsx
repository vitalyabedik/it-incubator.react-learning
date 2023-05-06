import React, {ChangeEvent, useRef, useState} from 'react'
import {action} from '@storybook/addon-actions'

export default {
    title: 'Input'
}

export const UncotrolledInput = () => <input/>

export const TrackValueOfUncotrolledInput = () => {
    const [value, setValue] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    return <><input onChange={onChangeHandler}/> - {value}</>
}

export const GetValueOfUncotrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickSaveHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }


    return <><input ref={inputRef}/>
        <button onClick={onClickSaveHandler}>save</button>
        - action value: {value}</>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChangeInputHandler}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)

    const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type="checkbox" checked={parentValue} onChange={onChangeCheckboxHandler}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')

    const onChangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChangeSelectHandler}>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Kiev</option>
    </select>
}


export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>

