import { useState } from "react";

export default function NavBar({navState}:any) {
    return (
        <>
        <nav>
            <div id="navbar" className={navState}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            </div>
        </nav>
        </>
    )
}

function Card() {
    const cardStates = ["card__inner","card__inner is-flipped"];
    const [Index,setIndex] = useState(0);
    function toggleCard() {
        setIndex((Index +1) % 2);
    }
    let state = cardStates[Index]
    return (
        <div className="card">
            <div className={state} onClick={toggleCard}>
                <div className="card__face card__face--front">
                    <h2>Module Title</h2>
                </div>
                <div className="card__face card__face--back">
                    <div className="card__content">
                        <div className="card__header">
                            <h2>Module Title</h2>
                        </div>
                        <div className="card__body">
                            <h3>Contents</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}