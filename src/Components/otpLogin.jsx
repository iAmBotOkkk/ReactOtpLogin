import { useState } from "react"
export const OTPLogin = () => {

    const [otp, setOtp] = useState("");
    const [number, setNumber] = useState("");
    const [userotp, setuserOtp] = useState("");

    function generateOtp() {
        fetch(`https://2factor.in/API/V1/6169ec3e-5b28-11f0-a562-0200cd936042/SMS/${number}/AUTOGEN`, {
            method: "GET"
        })
            .then(async (res) => {
                const json = await res.json();
                setOtp(json);
            })
    }
    function handleLogin(){
        if(userotp === otp){
            alert("Otp logged in");
        } else {
            alert("invalid Otp")
        }
    }

    return (
        <div className="Otp">
            <h1>Otp Login</h1>
            <div className="btn">
                <input type="number" placeholder="Enter your 10-digit number" minLength={10} required
                    onChange={(e) => {
                        setNumber(e.target.value);
                    }} />
                <button onClick={generateOtp}>submit</button>
            </div>
            {otp && (
                <div className="otp-field">
                    <input
                        type="number"
                        placeholder="Enter OTP"
                        value={userotp}
                        onChange={(e) => setuserOtp(e.target.value)}
                        required
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    );
};