import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
const InitialFormData = {
  username: "",
  email: "",
  // phone: "",
  // address: "",
  // birthday: "",
  // nid: "",
  // social_link: "",
  password: "",
  confirm_password: "",
};

const Register = () => {
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
        {/* user name */}
        <div className="input_field">
          <div className="input_style">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="John Doe"
              onChange={handleOnChange}
            />
            {errorMessage.username ? (
              <div className="error_style">{errorMessage.username}</div>
            ) : null}
          </div>

          {/* user name */}
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
          {/* user name */}
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
          {/* user name */}
          {/* <div className="input_style">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="John Doe"
              onChange={handleOnChange}
            />
            {errorMessage.phone ? (
              <div className="error_style">{errorMessage.phone}</div>
            ) : null}
          </div> */}
          {/* user name */}
          {/* <div className="input_style">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="John Doe"
              onChange={handleOnChange}
            />
            {errorMessage.address ? (
              <div className="error_style">{errorMessage.address}</div>
            ) : null}
          </div> */}
          {/* user name */}
          {/* <div className="input_style">
            <label htmlFor="birthday">Birthday</label>
            <input
              type="text"
              name="birthday"
              id="birthday"
              placeholder="John Doe"
              onChange={handleOnChange}
            />
            {errorMessage.birthday ? (
              <div className="error_style">{errorMessage.birthday}</div>
            ) : null}
          </div> */}
          {/* user name */}
          {/* <div className="input_style">
            <label htmlFor="nid">National ID</label>
            <input
              type="text"
              name="nid"
              id="nid"
              placeholder="John Doe"
              onChange={handleOnChange}
            />
            {errorMessage.nid ? (
              <div className="error_style">{errorMessage.nid}</div>
            ) : null}
          </div> */}
          {/* user name */}
          {/* <div className="input_style">
            <label htmlFor="social_link">Social Link</label>
            <input
              type="text"
              name="social_link"
              id="social_link"
              placeholder="John Doe"
              onChange={handleOnChange}
            />
            {errorMessage.social_link ? (
              <div className="error_style">{errorMessage.social_link}</div>
            ) : null}
          </div> */}

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

          <div className="input_style">
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="confirm_password"
              name="confirm_password"
              id="confirm_password"
              onChange={handleOnChange}
            />
            {errorMessage.confirm_password ? (
              <div className="error_style">{errorMessage.confirm_password}</div>
            ) : null}
          </div>
        </div>
        <div className="social_login">
          <button className="btn bg-gray-200 text-black flex items-center gap-1 justify-center">
            <FontAwesomeIcon icon={faGoogle} />
            <>continue with Google</>
          </button>
          <button className="btn-primary bg-blue-600 flex items-center gap-1 justify-center">
            <FontAwesomeIcon icon={faFacebook} />
            <>continue with Facebook</>
          </button>
          <p>
            Already have an account? <Link href="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;

const validator = (data) => {
  let err = {};
  if (!data.username.trim()) {
    err.username = "Username is required!";
  }
  if (!data.email.trim()) {
    err.email = "Email is required!";
  }
  if (!data.phone.trim()) {
    err.phone = "Phone is required!";
  }
  if (!data.address.trim()) {
    err.address = "Address is required!";
  }
  if (!data.birthday.trim()) {
    err.birthday = "Birthday is required!";
  }
  if (!data.nid.trim()) {
    err.nid = "National ID number is required!";
  }
  // if(!data.social_link.trim()){
  //   err.social_link = "Socia is required!"
  // }
  if (!data.password.toString().trim()) {
    err.password = "Password is required!";
  } else if (password.toString().length < 8) {
    err.password = "Password is less then 8 charecter!";
  }
  return err;
};
