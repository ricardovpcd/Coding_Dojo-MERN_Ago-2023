import { useState } from "react";

const PersonCard = (props) => {
    const [ageState, setAgeState] = useState(props.age);

    const clickAge = () =>{
        setAgeState(ageState + 1);
    }

    return(
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: <label onClick={clickAge}>{ageState}</label></p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    );
}

export default PersonCard;