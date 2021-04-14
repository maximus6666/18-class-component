import React from 'react';
import "../styles.css";
import maleIcon from "../icons/male-user.svg";
import femaleIcon from "../icons/woman-avatar.svg";

export default function Contact({props}) {

    function isMale(gender) {
        if (gender && gender === "male"){
          return <img className="gender-icon" src={maleIcon} alt="gender" ></img>;
          } else if (gender && gender === "female") {
            return <img className="gender-icon" src={femaleIcon} alt="gender" ></img>;
        };
    }

    return(
        <div className="contact-wrapper">
           <div className="name">{props.firstName} {props.lastName}</div>
           <div className="phone">{props.phone}</div>
           {props.gender ? isMale(props.gender) : <div className="gender-icon"></div>}
        </div>

    )
}
