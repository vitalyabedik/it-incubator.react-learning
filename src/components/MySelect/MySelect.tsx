import React from 'react';
import {TypeOfValues} from './MySelect.stories';

export type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: number
    onOpen: () => void
    changeSelectedValue: (value: TypeOfValues) => void
    isOpen: boolean
    items: ItemType[]
    filteredItems: ItemType[]
}

export function MySelect(props: SelectPropsType) {
    const {isOpen, value, items, filteredItems, onOpen, changeSelectedValue} = props

    const onOpenHadler = () => {
        onOpen()
    }

    const onClickHandler = (value: TypeOfValues) => {
        changeSelectedValue(value)
    }

    return (
        <div>
            <div onClick={onOpenHadler}>{items.filter(el => el.value === value)[0].title}</div>
             {isOpen && filteredItems.map(i => <div key={i.value} onClick={() => onClickHandler(i.value)}>{i.title}</div>)}
        </div>
    )
}