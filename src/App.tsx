import React from 'react';
import './App.css';

function hello() {
    debugger
    alert('Hello IT-KAMASUTRA')
}

// hello()


// function declaration
function App() {
    console.log('App rendering')
    // полезное что-то
    // обязана вернуть JSX
    return (
        <div className="App">
            <AppTitle/>
            <Rating/>
            <Accourdion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    console.log('AppTitle rendering')
    return <>This is APP component</>
}

function Rating() {
    console.log('Rating rendering')
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>

    )
}

function Accourdion() {
    console.log('Accourdion rendering')
    return (
        <>
            <AccourdionTitle/>
            <AccourdionBody/>
        </>
    )
}

function AccourdionTitle() {
    console.log('AccourdionTitle rendering')
    return (
        <>
            <h3>Меню</h3>
        </>
    )
}

function AccourdionBody() {
    console.log('AccourdionBody rendering')
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )
}

function Star() {
    console.log('Star rendering')
    return (
        <div>Star</div>
    )
}

export default App;