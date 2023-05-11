import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from './reducer';

type UncontrolledAccordionPropsType = {
    titleValue: string,
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log('Accordion rendering')
        // const [collapsed, setCollapsed] = useState(false)

        const [state, dispatch] = useReducer(reducer, {collapsed: false})

        return (
            <div>
                {/*<AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>*/}
                <AccordionTitle title={props.titleValue} onClick={() => dispatch({type: TOGGLE_COLLAPSED})}/>
                {!state.collapsed && <AccordionBody/>}
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion
