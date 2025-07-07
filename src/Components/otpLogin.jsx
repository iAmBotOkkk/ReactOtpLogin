import { useState } from "react"


 export const OTPLogin = () =>{
    const [otp , setOtp] = useState('');
    const [number , setNumber] = useState('');
    const [userOtp , setUserOtp] = useState('');


    function generateOtp(){
        fetch(`https://2factor.in/API/V1//SMS/${number}/AUTOGEN`,{
            method : "GET"
        }).then(async function(res){
            const json = res.json();
            console.log(json)
            setOtp(json.Details);
        })
    }
    return(
        <div className="Otp">
            <h1>Login via OTP</h1>
            <div className="btn">
                <input type="number" minLength={10} onChange={function(e){
                    setNumber(e.target.value)
                }}
                placeholder="Enter Your mobile number" required />
                <button onClick={generateOtp}>Send Otp</button>
                {otp && <p style={{ color: "green" }}>OTP sent! Session ID: {otp.Details}</p>}
                
            </div>
            
        </div>
    )
}