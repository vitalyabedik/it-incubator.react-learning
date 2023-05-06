import React, {useState} from 'react';

import {action} from '@storybook/addon-actions';
import Accordion from './Accordion'

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

export const MenuCollapsedMode = () => <Accordion onClick={onClickCallback} titleValue={'Menu'} collapsed={true} onChange={callback} items={[]}/>
export const UsersUnCollapsedMode = () => <Accordion onClick={onClickCallback} titleValue={'Users'} collapsed={false} onChange={callback} items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {title: 'Artem', value: 3}, {title: 'Viktor', value: 4}]}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)

    const onChangeHandler = () => {
        setValue(!value)
    }

    return <Accordion onClick={onClickCallback} titleValue={'Users'} collapsed={value} onChange={onChangeHandler}  items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {title: 'Artem', value: 3}, {title: 'Viktor', value: 4}]}/>
}