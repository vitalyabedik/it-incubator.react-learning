import React, {useEffect, useState} from 'react';

import './Clock.css'

const get2digitsString = (num: number) => num < 10 ? '0' + num : num

type PropsType = {}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const hour = date.getHours() * 30 + 180; // 360/12 = 30 each hour it rotates 30deg +180 (initial design at 0 deg was upside down so to fix it i rotate 180deg..// see the design at 0deg for more clarification)
    const minute = date.getMinutes() * 6 + 180; // 360/60 = 6 each minutes it rotate 6deg + 180(same as above to ...see at 0 deg)
    const second = date.getSeconds() * 6 + 180; // // 360/60 = 6 each minutes it rotate 6deg + 180(look at 0 deg for more clarification)

    return (
        <>

            <div className="clock">
                <div
                    className="hour-hand"
                    style={{
                        transform: 'rotate(' + hour + 'deg)'
                    }}
                />
                <div
                    className="minute-hand"
                    style={{
                        transform: 'rotate(' + minute + 'deg)'
                    }}
                />
                <div
                    className="second-hand"
                    style={{
                        transform: 'rotate(' + second + 'deg)'
                    }}
                />
                <div className="brand"/>
            </div>

        </>
    );
};













// ------------------------------

// import React, {useEffect, useState} from 'react';
//
// const get2digitsString = (num: number) => num < 10 ? '0' + num : num
//
// type PropsType = {
//
// }
//
// export const Clock: React.FC<PropsType> = (props) => {
//     const [data, setDate] = useState(new Date())
//
//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setDate(new Date())
//         }, 1000)
//
//         return () => {
//             clearInterval(intervalId)
//         }
//     }, [])
//
//     return (
//         <div>
//             <span>{get2digitsString(data.getHours())}</span>
//             :
//             <span>{get2digitsString(data.getMinutes())}</span>
//             :
//             <span>{get2digitsString(data.getSeconds())}</span>
//         </div>
//     );
// };

