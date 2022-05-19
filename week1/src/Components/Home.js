import React from "react"

const Home = (props) =>{
    let fn = props.name;
    let sn = props.surname;
    let image = props.image
    return(
        
        <center>
            <h1  style={{ color: `${'#BC9CFF'}`, fontWeight: `${'normal'}`}}>Welcome {fn} {sn} {image}</h1>
        </center>
    );
};

export default Home