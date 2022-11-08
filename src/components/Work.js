import React from "react";



function Work (props) {

    

    return  <div className="work-divs">
        <h1>{props.workplace}</h1>
        <h2>{props.years}</h2>
        <p>{props.description}</p>
    </div>
}

export default Work;