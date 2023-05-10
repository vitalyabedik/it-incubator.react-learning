import React, {useState} from 'react';

import {action} from '@storybook/addon-actions';
import {ItemType, Select} from './Select';


export default {
    title: 'Select',
    component: Select
}

const initialItems = [
    {value: '1', title: 'Minsk'},
    {value: '2', title: 'Moscow'},
    {value: '3', title: 'Kiev'},
]


// export const BaseExample = () =>
//     <>
//         <Select onChange={action('Value changed')}
//                 value={'1'}
//                 items={initialItems}
//         />
//     </>

export const WithValue = () => {
    const [value, setValue] = useState('2')

    return (
        <>
            <Select onChange={setValue}
                    value={value}
                    items={initialItems}
            />
        </>
    )
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)

    return (
        <>
            <Select onChange={setValue}
                    value={value}
                    items={initialItems}
            />
        </>
    )
}