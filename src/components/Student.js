import React from "react";


const Student = (props) => {
    const { name, id, age, bio, image, GPA, addStudent} = props
    
   
        return (
            <div className="classroom">
            
            <h1>{name}</h1>
            <h3>Age:{age}</h3>
            <img src={image}/>
            <p>Bio: {bio}</p>
            <p>GPA: {GPA}</p>
            <button onClick={() => addStudent({name, GPA, id})} >Add to Class</button>
            
            </div>
        )
    

}


export default Student