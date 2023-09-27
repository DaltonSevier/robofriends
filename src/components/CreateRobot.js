import React, { useState } from "react";
import "./CreateRobot.css";

const CreateRobot = (props) => {
    const [formData, setFormData] = useState({ name: '', email: '', id: ''});

    const handleChange = (formEvent) => {
        const { name, value } = formEvent.target;
        setFormData({ ...formData, [name]: value});
    }

    const handleSubmit = (formEvent) => {
        // Prevent the page from refreshing the page every time a robot is added maually
        formEvent.preventDefault();

        const {name, email, id} = formData;

        if(!name | !email || !id){
            return;
        }

        // Send new robot to the robots array in the parent
        props.updateRobots(formData);

        setFormData({ name: '', email: '', id: '' });
    }


    return (
        <div className="f4">
            <h3>Add a new robot:</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className='pa3 ba b--green bg-lightest-blue' />
                </label>
                <label>
                    <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} className='pa3 ba b--green bg-lightest-blue' />
                </label>
                <label>
                    <input type="text" name="id" placeholder="Unique Robot Look" value={formData.id} onChange={handleChange} className='pa3 ba b--green bg-lightest-blue' />
                </label>
                <label>
                    <button type="submit" className='pa3 ba b--green bg-lightest-blue'>Submit</button>
                </label>
            </form>
        </div>
    )
}

export default CreateRobot;