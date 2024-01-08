import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BE_URL } from "../App";

function Register() {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        mobile: '',
    })
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setUserData({...userData,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(BE_URL+'/register',{
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                "Content-Type":"application/json"
            }

        }).then((res) => res.json())
        .then((result) => {
            console.log('result==', result);
            navigate('/login')
        }).catch((err) => {
            console.log(' == error', err);
            setError(err.message)
        })

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input  type='text' name='name' placeholder='user name' onChange={handleChange} value={userData.name}/>
                </div>
                <div>
                    <input  type='text' name='email' placeholder='user mail' onChange={handleChange} value={userData.email}/>
                </div><div>
                    <input  type='text' name='mobile' placeholder='mobile number' onChange={handleChange} value={userData.mobile}/>
                </div><div>
                    <input  type='text' name='password' placeholder='enter password' onChange={handleChange} value={userData.password}/>
                </div>
                <button type="submit" >Submit</button>
            </form>
            <div><h3>{error}</h3></div>
        </div>
    )
    }
    
    export default Register;
    