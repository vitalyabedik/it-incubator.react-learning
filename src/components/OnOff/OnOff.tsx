import './OnOff.css'

type propsType = {
    isOn: boolean
}

export const OnOff = (props: propsType) => {
    const className = props.isOn ? 'on' : 'off'

    return (
        <div>
            <button className={className}>on</button>
            <button className={className}>off</button>
            <span className={className}>o</span>
        </div>
    )
}