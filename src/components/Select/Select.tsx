import React, {useState, KeyboardEvent, useEffect} from 'react';

import styles from './Select.module.css'

export type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]

}

export function Select(props: SelectPropsType) {
    const {value, items, onChange} = props

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(value)

    const selectedItem = items.find(i => i.value === value)
    const hoveredItem = items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(value)
    }, [value])

    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        onChange(value)
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || 'ArrowUp') {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? items[i + 1]
                        : items[i - 1]

                    if (pretendentElement) {
                        onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                onChange(items[0].value)
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    // const selectClasses = `
    // ${styles.select}
    // ${active ? styles.active : ''}
    // `
    const selectClasses = `
    ${styles.select} 
    `
    const itemClasses = `
    ${styles.item}
    ${selectedItem ? styles.selected : ''}
    `

    return (
        <>
            <div className={selectClasses} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={styles.items}>
                        {items.map(i => {
                            return (
                                <div onMouseEnter={() => setHoveredElementValue(i.value)}
                                     className={`${styles.item} ${hoveredItem === i ? styles.selected : ''}`}
                                     key={i.value}
                                     onClick={() => onItemClick(i.value)}
                                >
                                    {i.title}
                                </div>
                            )
                        })}
                    </div>}
            </div>
        </>
    )
}