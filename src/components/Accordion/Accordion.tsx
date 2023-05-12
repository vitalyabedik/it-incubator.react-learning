import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionMemoized(props: AccordionPropsType) {
    console.log('Accordion rendering')
        return (
            <div>
                <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
                {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
            </div>
        )
}

const Accordion = React.memo(AccordionMemoized)

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitleMemoized(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
    )
}

const AccordionTitle = React.memo(AccordionTitleMemoized)

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBodyMemoized(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')

    const onClickBodyHandler = (value: any) => {
        props.onClick(value)
    }

    return (
        <ul>
            {props.items.map((el, index) => <li onClick={() => onClickBodyHandler(el.value)} key={index}>{el.title}</li>)}
        </ul>
    )
}

const AccordionBody = React.memo(AccordionBodyMemoized)

export default Accordion
