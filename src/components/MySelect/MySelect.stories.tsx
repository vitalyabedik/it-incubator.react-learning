import React, {useState} from 'react';

import {action} from '@storybook/addon-actions';
import {ItemType, MySelect} from './MySelect';


export default {
    title: 'MySelect',
    component: MySelect
}

const initialItems = [
    {title: 'Dimych', value: 1},
    {title: 'Valera', value: 2},
    {title: 'Artem', value: 3},
    {title: 'Viktor', value: 4}
]

export type TypeOfValues = 1 | 2 | 3 | 4

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

// export const SelectClosedMode = () => <Select isOpen value={'Select'} onChange={callback} items={[]}/>
// export const SelectOpenedMode = () => <Select isOpen={false} value={'Select'} onChange={callback} items={items}/>

export const ModeChangingMemoized = () => {
    const [items, setItems] = useState<ItemType[]>([...initialItems])
    const [selectedValue, setSelectedValue] = useState<TypeOfValues>(1)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onOpen = () => {
        setIsOpen(!isOpen)
    }

    const changeSelectedValue = (value: TypeOfValues) => {
        setSelectedValue(value)
        setIsOpen(!isOpen)
    }

    let filteredItems = items

   if (selectedValue === 1) {
       filteredItems = items.filter(el => el.value !== 1)
   }
    if (selectedValue === 2) {
        filteredItems = items.filter(el => el.value !== 2)
    }
    if (selectedValue === 3) {
        filteredItems = items.filter(el => el.value !== 3)
    }
    if (selectedValue === 4) {
        filteredItems = items.filter(el => el.value !== 4)
    }



    return <MySelect isOpen={isOpen}
                     value={selectedValue}
                     onOpen={onOpen}
                     changeSelectedValue={changeSelectedValue}
                     items={initialItems}
                     filteredItems={filteredItems}
    />
}

const ModeChanging = React.memo(ModeChangingMemoized)