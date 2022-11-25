import React, { useState } from 'react'
import './Form.css'



function Form() {
    
const [getData,setData] = useState([])
const [getName,setName] = useState("")
const [getEmail,setEmail] = useState("")

console.log("getName",getName);


    return (
        <>

            <div className="row">
                <div className="col-md-12">
                    <form >
                        <h1> Sign Up </h1>
                        <fieldset>
                            <legend>
                                <span className="number">1</span> Your Basic Info
                            </legend>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="user_name" autocomplete="off" defaultValue={getData} onChange={(e)=>{setName(e.target.value)}} />


                            <label htmlFor="email">Email:</label>
                            <input type="email" id="mail" name="user_email" />


                            {/* <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="user_password" />


                            <label>Age:</label>
                            <input
                                type="radio"
                                id="under_13"
                                defaultValue="under_13"
                                name="user_age"
                            />
                            <label htmlFor="under_13" className="light">
                                Under 13
                            </label>
                            <br />
                            <input
                                type="radio"
                                id="over_13"
                                defaultValue="over_13"
                                name="user_age"
                            />
                            <label htmlFor="over_13" className="light">
                                Over 13
                            </label> */}
                        </fieldset>
                        {/* <fieldset>
                            <legend>
                                <span className="number">2</span> Your Profile
                            </legend>

                            <label htmlFor="job">Job Role:</label>
                            <select id="job" name="user_job">
                                <optgroup label="Web">
                                    <option value="frontend_developer">Front-End Developer</option>
                                    <option value="frontend_developer">Back-End Developer</option>
                                </optgroup>
                                <optgroup label="Mobile">
                                    <option value="android_developer">Android Developer</option>
                                    <option value="ios_developer">IOS Developer</option>
                                    <option value="mobile_designer">Mobile Designer</option>
                                </optgroup>
                            </select>
                        </fieldset> */}
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div></>
    )
}

export default Form