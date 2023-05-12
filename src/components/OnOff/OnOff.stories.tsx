import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import {OnOff, OnOffMemoized} from './OnOff';

export default {
    title: "OnOff",
    component: OnOff
}

const callback = action('on or off clicked')

export const OnModeMemoized = () => <OnOff on={true} onChange={callback}/>
export const OffModeMemoized = () => <OnOff on={false} onChange={callback}/>

export const OnMode = React.memo(OnModeMemoized)
export const OffMode = React.memo(OffModeMemoized)

export const ModeChangingMemoized = () => {
    const [value, setValue] = useState<boolean>(true)

    return <OnOff on={value} onChange={setValue}/>
}

export const ModeChanging = React.memo(ModeChangingMemoized)