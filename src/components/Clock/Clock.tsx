import React, {useEffect, useState} from 'react';

const get2digitsString = (num: number) => num < 10 ? '0' + num : num

type PropsType = {

}

export const Clock: React.FC<PropsType> = (props) => {
    const [data, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div>
            <span>{get2digitsString(data.getHours())}</span>
            :
            <span>{get2digitsString(data.getMinutes())}</span>
            :
            <span>{get2digitsString(data.getSeconds())}</span>
        </div>
    );
};

