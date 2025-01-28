import { useState } from "react";
import { PiAddressBook } from "react-icons/pi";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userNameColor, setUserNameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = (e) => {
    e.preventDefault();

    if (userName.length > 8) {
      setErrorUserName("");
      setUserNameColor("green");
    } else {
      setErrorUserName("Username must be more then 8 letters.");
      setUserNameColor("red");
    }
    e.preventDefault();

    if (email.includes("@gmail.com")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("Invalid email.");
      setEmailColor("red");
    }
    e.preventDefault();

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password must have more than 8 characters.");
      setPasswordColor("red");
    }

    if (password !== "" && confirmPassword === password) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("Password does not match.");
      setConfirmPasswordColor("red");
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-image"></div>

        <form>
          <input
            type="text"
            placeholder="Name"
            style={{ borderColor: userNameColor }}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <p className="error">{errorUserName}</p>

          <input
            type="email"
            placeholder="Email"
            style={{ borderColor: emailColor }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error">{errorEmail}</p>

          <input
            type="password"
            placeholder="Password"
            style={{ borderColor: passwordColor }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error">{errorPassword}</p>

          <input
            type="password"
            placeholder="Confirm Password"
            style={{ borderColor: confirmPasswordColor }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="error">{errorConfirmPassword}</p>

          <button className="submit-btn" onClick={validate}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
