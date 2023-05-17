import React, {useMemo, useState} from 'react';

import { Select, SelectMemoized} from '../Select/Select';
import {ItemType, SelectUseMemoHelper} from './SelectUseMemoHelper';


export default {
    title: 'SelectUseMemoHelper',
    component: SelectUseMemoHelper
}

const initialItems = [
    {
        id: 1,
        value: '1',
        country: 'Belarus',
        city: {
            cityName: 'Minsk',
            population: 3000000
        }
    },
    {
        id: 2,
        value: '2',
        country: 'Ukraine',
        city: {
            cityName: 'Kiev',
            population: 7000000
        }
    },
    {
        id: 3,
        value: '3',
        country: 'Russia',
        city: {
            cityName: 'Moscow',
            population: 10000000
        }
    }
]


export const SelectHelper1 = () => {
    console.log('render SelectHelper1')
    const [items, setItems] = useState<ItemType[]>(initialItems)
    const [value, setValue] = useState('2')
    const [count, setCount] = useState(0)

    const filteredItems = useMemo(() => {
       return  items.filter(el => el.city.population > 4000000)
    }, [items])

    // const filteredItems = items.filter(el => el.city.population > 4000000)

    const onClickCountHandler = () => {
        setCount((prevState) => prevState + 1)
    }

    return (
        <div style={{display: 'flex', margin: '20px', gap: '40px'}}>
            <div>
                <SelectUseMemoHelper onChange={setValue}
                                     value={value}
                                     items={filteredItems}
                />
                <button onClick={onClickCountHandler}>+</button>
                <span>{count}</span>
                <div>
                    <Elements items={filteredItems}/>
                </div>
            </div>
            {/*<div>*/}
            {/*    <SelectUseMemoHelper onChange={setValue}*/}
            {/*                         value={value}*/}
            {/*                         items={initialItems}*/}
            {/*    />*/}
            {/*    <button onClick={onClickCountHandler}>+</button>*/}
            {/*    <span>{count}</span>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <SelectUseMemoHelper onChange={setValue}*/}
            {/*                         value={value}*/}
            {/*                         items={initialItems}*/}
            {/*    />*/}
            {/*    <button onClick={onClickCountHandler}>+</button>*/}
            {/*    <span>{count}</span>*/}
            {/*</div>*/}
        </div>
    )
}

const RenderedElements = (props: {items: ItemType[] }) => {
    console.log('RenderedElements')
    return (
            <div>{props.items.map(el => {
                return (
                    <div key={el.id}>{el.city.cityName}</div>
                )
            })}</div>
        )
}

const Elements = React.memo(RenderedElements)




// export const Select1 = React.memo(SelectHelper1)

export const SelectHelper2 = () => {
    console.log('render SelectHelper2')
    const [value, setValue] = useState(null)

    return (
        <>
            <SelectUseMemoHelper onChange={setValue}
                                 value={value}
                                 items={initialItems}
            />
        </>
    )
}

// export const Select2 = React.memo(SelectHelper2)