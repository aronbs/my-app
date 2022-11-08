import React from 'react';
import Myself from "./components/Myself.js";
import Work from "./components/Work.js";


const cv = {
    jobs: [
        {
            name: "Atnorth",
            years: "November 2020 - June 2022",
            description : "Worked there as a technician, fixing and setting up bitcoin and ethereum machines"
        },
        {
            name: "Isavia",
            years: "June 2015 - Mars 2020",
            description : "Worked as a security guard, searching luggage and people for dangerous items."
        },
        {
            name: "Airport Associates",
            years: "June 2013 - August 2014",
            description : "Worked there as a baggage handler, putting people's luggage on the plane."
        },

    ]
}


function App () {
    return <div>
        <Myself />
        <Work workplace={cv.jobs[0].name} years={cv.jobs[0].years} description={cv.jobs[0].description} />
        <Work workplace={cv.jobs[1].name} years={cv.jobs[1].years} description={cv.jobs[1].description} />
        <Work workplace={cv.jobs[2].name} years={cv.jobs[2].years} description={cv.jobs[2].description} />
    </div>
}

export default App;