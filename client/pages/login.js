import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

const InitialFormData = {
  email: "",
  password: "",
};

const Login = () => {
  // form states
  const [formData, setFormData] = useState(InitialFormData);
  const [errorMessage, setErrorMessage] = useState(formData);

  // form state handlers
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(validator(formData));
  };

  // api handler
  const handleApi = () => {
    if (Object.keys(errorMessage).length === 0) {
      console.log(formData);
    } else {
      console.log(errorMessage);
    }
  };
  useEffect(() => {
    handleApi();

    return () => handleApi();
  }, [errorMessage]);
  return (
    <div className="login_container">
      <div className="l_c__image"></div>
      <form>
        <h2>W3 Safety</h2>
        <div className="input_fields">
          {/* email */}
          <div className="input_style">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="John Doe"
              onChange={handleOnChange}
            />
            {errorMessage.email ? (
              <div className="error_style">{errorMessage.email}</div>
            ) : null}
          </div>

          {/* password  */}
          <div className="input_style">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleOnChange}
            />
            {errorMessage.password ? (
              <div className="error_style">{errorMessage.password}</div>
            ) : null}
          </div>
          <div>
            <button className="btn-primary" onClick={handleOnSubmit}>
              Login
            </button>
          </div>
        </div>
        <div className="social_login">
          <button className="btn bg-gray-200 text-black flex items-center gap-1 justify-center">
            <FontAwesomeIcon icon={faGoogle} />
            <>continue with Google</>
          </button>
          <button className="btn-primary bg-blue-600 flex items-center gap-1 justify-center"><FontAwesomeIcon icon={faFacebook} />
            <>continue with Facebook</></button>
        </div>
        <p>Don't have an account? <Link href="/register">Register</Link></p>
      </form>
    </div>
  );
};

export default Login;

const validator = (data) => {
  let err = {};
  if (!data.email.trim()) {
    err.email = "Email is required!";
  }
  if (!data.password.toString().trim()) {
    err.password = "Password is required!";
  } else if (password.toString().length < 8) {
    err.password = "Password is less then 8 charecter!";
  }
  return err;
};
