import React, {ChangeEvent, useRef, useState} from 'react'
import {action} from '@storybook/addon-actions'

export default {
  title: "Input"
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


  return <><input ref={inputRef}/><button onClick={onClickSaveHandler}>save</button> - action value: {value}</>
}


export const ControlledInput = () => <input value={'it-incubator.by'}/>

