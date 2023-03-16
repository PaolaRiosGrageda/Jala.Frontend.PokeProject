import { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ThemeContext from "./context/ThemeContext";


function SignInComponent(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [emailErrorS, setEmailError] = useState("");
    const [passwordErrorS, setPasswordError] = useState("");

    // const activeStyle = {color: "#F15B2A" };
    const data = useContext(ThemeContext);
    const navigate = useNavigate();

    const homePage = () => {
        navigate("/home")
    }

    useEffect((e)=> {
        if (passwordErrorS || emailErrorS) {
            alert(JSON.stringify({emailError: emailErrorS, passwordError: passwordErrorS}));   
        }
    }, [passwordErrorS, emailErrorS])

    const handleEmailInputChange = function(e) {
        console.log("Hi from handleEmailInputChange");
        setEmail(e.target.value);
    }

    const handlePasswordInputChange = function(e) {
        console.log("Hi from handlePasswordInputChange");
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    const handleRememberMeInputChange = function(e) {
        console.log("Hi from handleRememberMeInputChange");
        setRememberMe(!rememberMe);
    }

    const handleSubmit = function(e) {
        let emailError = "";
        let passwordError = "";

        if (!email) {
            emailError = "Email can't be empty";
            setEmailError(emailError);
        }

        if (password === "") {
            passwordError = "Password can't be empty";
            setPasswordError(passwordError);
        } else if (password.length < 8) {
            console.log(password.length)
            passwordError = "Password should be at least 8 characters";
            setPasswordError(passwordError);
        }

        if (emailError || passwordError) {
            setEmailError(emailError);
            setPasswordError(passwordError);
           
            e.preventDefault();
        } else {
            //alert(JSON.stringify({email: email, password: password, rememberMe: rememberMe}));
            homePage();
        }
    }

    return (
        <div className= {data.theme}>
            <title>{"Sign In"}</title>
            <form onSubmit={handleSubmit}>
                <label>Email: </label>
                <input type={"email"}
                       value={email}
                       onChange={handleEmailInputChange}
                />
                {emailErrorS && <label>{emailErrorS}</label>}
                <br></br>
                <label>Password: </label>
                <input type={"password"}
                       value={password}
                       onChange={handlePasswordInputChange} 
                />
                {passwordErrorS && <label>{passwordErrorS}</label>}
                <br></br>
                <label>
                    <input type="checkbox"
                       checked={rememberMe}
                       onChange={handleRememberMeInputChange} 
                    />
                    Remember me
                </label>
                <br></br>
                <input type="submit" value="Submit" />
            </form>
            <input type="radio" name="theme" onClick={data.handleTheme} id="light" value="light" />
            <label htmlFor='light'>Light</label>
            <input type="radio" name="theme" onClick={data.handleTheme} id="dark" value="dark" />
            <label htmlFor='dark'>Dark</label>

        </div>
    )
}

export default SignInComponent;