import { useState } from "react";
import { directory } from "./data";

interface CardProps {
    ModuleName:string;
    ModuleCode:string;
    Notes:string;
    Chapters: Array<string>;
}



export default function NavBar({navState}:any) {
    
    return (
        <>
        <nav>
            <div id="navbar" className={navState}>
                {directory.map((module) => <Card ModuleName={module.ModuleName} ModuleCode={module.ModuleCode} Notes={module.Notes} Chapters={module.Chapters} ></Card>)}
            </div>
        </nav>
        </>
    )
}

function Card(props :CardProps) {
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
                    <h2>{props.ModuleName}</h2>
                    <h3>{props.ModuleCode}</h3>
                    <a href={props.Notes} className="button" download><img src="" alt="Download Notes"></img><i className="fa fa-download"></i></a>
                </div>
                <div className="card__face card__face--back">
                    <div className="card__content">
                        <div className="card__header">
                            <h2>{props.ModuleName}</h2>
                        </div>
                        <div className="card__body">
                            <h3>Chapters</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}