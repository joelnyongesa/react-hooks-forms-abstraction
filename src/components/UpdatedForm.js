import { useState } from "react";

function UpdatedForm(){
    const [formData, setFormData] = useState({
        firstName: "Joel",
        lastName: "Nyongesa",
    })


    function handleChange(e){
        const name = e.target.name
        let value = e.target.value

        // For checkboxes:
        if(e.target.type === "checkbox"){
            value = e.target.checked;
        }
        
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(formData)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={formData.firstName} onChange={handleChange}/>
            <input type="text" value={formData.lastName} onChange={handleChange}/>
            <input type="checkbox" name="admin" onChange={handleChange} checked={formData.admin}/>
            <button type="submit">Submit</button>
        </form>
    )
}


export default UpdatedForm;