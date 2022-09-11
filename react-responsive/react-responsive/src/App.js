import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";
import Navbar from "./components/Navbar";
import PreLoader from "./components/PreLoader";
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use';

const App = () => {

  <Navbar />
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });


  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize()

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 10000);
  };

  const handleClear = () => {
    setValues({
      username: "",
      email: "",
      birthday: "",
      password: "",
      confirmPassword: "",
    });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="main2">
        <PreLoader />


        {/* <PreLoader1 /> */}
        {/* <PreLoader2 /> */}


        <Navbar />
        <div className="app">
          <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}

            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleClear}>Clear</button>

          </form>

          {
            showConfetti &&
            <Confetti
              width={width}
              height={height}
              wind={0.1}
            />
          }
        </div>
      </div>



    </>
  );
};

export default App;