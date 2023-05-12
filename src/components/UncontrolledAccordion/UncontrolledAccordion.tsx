import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from './reducer';
import {WithValueMemoized} from '../Select/Select.stories';

type UncontrolledAccordionPropsType = {
    titleValue: string,
}

function UncontrolledAccordionMemoized(props: UncontrolledAccordionPropsType) {
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

export const UncontrolledAccordion = React.memo(UncontrolledAccordionMemoized)

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitleMemoized(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

export const AccordionTitle = React.memo(AccordionTitleMemoized)

function AccordionBodyMemoized() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export const AccordionBody = React.memo(AccordionBodyMemoized)

export default UncontrolledAccordion
