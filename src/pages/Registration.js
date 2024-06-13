import React from "react";
import "../css/registration.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { setNestedObjectValues, useFormik } from "formik";
const Registration = (e) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [batch, setBatch] = useState("");
  const [error, setError] = useState("");
  const [gender, setGender] = useState("");
  // console.log(username);
  // console.log(password);
  // console.log(email);
  // console.log(country);
  // console.log(city);
  // console.log(phone);
  // console.log(batch);
  // console.log(gender);

  const handleClick = async (values) => {
  
    // e.preventDefault();
    // const form = {
    //     "username": username,
    //     "password":password,
    //     "email" : email,
    //     "country" : country,
    //     "city" : city,
    //     "phone" : phone,
    //     "batch" :batch,
    //     "gender" :gender

    // }
    // console.log(form)
    try {
      const res = await axios.post(
        "https://zendesk-clone-backend.onrender.com/api/auth/register",
        values
      );
      console.log(res.data);
      navigate("/login");
    } catch (err) {
      console.error(err);
      console.log("Username already exist! go to LOGIN");
      setError("Username already exist ! go to LOGIN")
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Required";
    } else if (values.username.length > 20) {
      errors.username = "Must be 20 characters or less";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length > 10) {
      errors.password = "Must be 10 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (values.email.length > 30) {
      errors.email = "Must be 10 characters or less";
    }

    if (!values.country) {
      errors.country = "Required";
    } else if (values.country.length > 20) {
      errors.country = "Must be 20 characters or less";
    }

    if (!values.city) {
      errors.city = "Required";
    } else if (values.city.length > 15) {
      errors.city = "Must be 15 characters or less";
    }

    if (!values.phone) {
      errors.phone = "Required";
    } else if (!/^\d+$/.test(values.phone)) {
      errors.phone = "Enter only numbers";
    } else if (values.phone.length > 10) {
      errors.phone = "Must be 10 characters or less";
    }

    if (!values.batch) {
      errors.batch = "Required";
    } else if (values.batch.length > 20) {
      errors.batch = "Must be 20 characters or less";
    }

    if (!values.gender) {
      errors.gender = "Required";
    } else if (values.gender.length > 15) {
      errors.gender = "Must be 15 characters or less";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "Required";
    } else if (values.confirmpassword.length > 10) {
      errors.confirmpassword = "Must be 10 characters or less";
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword = "Password not equal";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      country: "",
      city: "",
      phone: "",
      batch: "",
      gender: "",
      confirmpassword : ""
    },
    validate,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      handleClick(values);
    },
  });

  return (
    <div className="body">
      <div class="container">
        <div class="title">Registration</div>
        <div class="content">
          <form onSubmit={formik.handleSubmit}>
            <div class="user-details">
              <div class="input-box">
                <span class="details">Username</span>
                <input
                  type="text"
                  placeholder="Enter your username"
                  required
                  // onChange={(e) => setUsername(e.target.value)}
                  onChange={formik.handleChange}
                  name="username"
                  value={formik.values.username}
                />
                 {formik.errors.username ? (
                <div className="err1">{formik.errors.username}</div>
              ) : null}
              </div>
             
              <div class="input-box">
                <span class="details">Email</span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  required
                  // onChange={(e) => setEmail(e.target.value)}
                  onChange={formik.handleChange}
                  name="email"
                  value={formik.values.email}
                />
                  {formik.errors.email ? (
                <div className="err1">{formik.errors.email}</div>
              ) : null}
              </div>
            
              <div class="input-box">
                <span class="details">Phone Number</span>
                <input
                  type="text"
                  placeholder="Enter your number"
                  required
                  // onChange={(e) => setPhone(e.target.value)}
                  onChange={formik.handleChange}
                  name="phone"
                  value={formik.values.phone}
                />
                 {formik.errors.phone ? (
                <div className="err1">{formik.errors.phone}</div>
              ) : null}
              </div>
             
              <div class="input-box">
                <span class="details">Batch</span>
                <input
                  type="text"
                  placeholder="Enter your batch"
                  required
                  // onChange={(e) => setBatch(e.target.value)}
                  onChange={formik.handleChange}
                  name="batch"
                  value={formik.values.batch}
                />
                 {formik.errors.batch ? (
                <div className="err1">{formik.errors.batch}</div>
              ) : null}
              </div>
             
              <div class="input-box">
                <span class="details">City</span>
                <input
                  type="text"
                  placeholder="Enter your city"
                  required
                  // onChange={(e) => setCity(e.target.value)}
                  onChange={formik.handleChange}
                  name="city"
                  value={formik.values.city}
                />
                  {formik.errors.city ? (
                <div className="err1">{formik.errors.city}</div>
              ) : null}
              </div>
            
              <div class="input-box">
                <span class="details">Country</span>
                <input
                  type="text"
                  placeholder="Enter your country"
                  required
                  // onChange={(e) => setCountry(e.target.value)}
                  onChange={formik.handleChange}
                  name="country"
                  value={formik.values.country}
                />
                    {formik.errors.country ? (
                <div className="err1">{formik.errors.country}</div>
              ) : null}
              </div>
          
              <div class="input-box">
                <span class="details">Password</span>
                <input
                  type="text"
                  placeholder="Enter your password"
                  required
                  // onChange={(e) => setPassword(e.target.value)}
                  onChange={formik.handleChange}
                  name="password"
                  value={formik.values.password}
                />
                {formik.errors.password ? (
                <div className="err1">{formik.errors.password}</div>
              ) : null}
              </div>
              
              <div class="input-box">
                <span class="details">Confirm Password</span>
                <input
                  type="text"
                  placeholder="Confirm your password"
                  required
                  // onChange={(e) => setPassword(e.target.value)}
                  onChange={formik.handleChange}
                  name="confirmpassword"
                  value={formik.values.confirmpassword}
                />
                  {formik.errors.confirmpassword ? (
                <div className="err1">{formik.errors.confirmpassword}</div>
              ) : null}
              </div>
            
            </div>
            <div class="gender-details">
              <input
                type="radio"
                name="gender"
                id="dot-1"
                value="male"
               // onClick={() => setGender("male")}
                onChange={formik.handleChange}
               // value={formik.values.gender}
              />
              <input
                type="radio"
                name="gender"
                id="dot-2"
                value="female"
               // onClick={() => setGender("female")}
                onChange={formik.handleChange}
               // value={formik.values.gender}
              />
              <input
                type="radio"
                name="gender"
                id="dot-3"
                value="prefer not to say"
               // onClick={() => setGender("prefer not to say")}
                onChange={formik.handleChange}
               // value={formik.values.gender}
              />
              <span class="gender-title">Gender</span>
              <div class="category">
                <label for="dot-1">
                  <span class="dot one"></span>
                  <span class="gender">Male</span>
                </label>
                <label for="dot-2">
                  <span class="dot two"></span>
                  <span class="gender">Female</span>
                </label>
                <label for="dot-3">
                  <span class="dot three"></span>
                  <span class="gender">Prefer not to say</span>
                </label>
              </div>
              {formik.errors.gender ? (
              <div className="err1">{formik.errors.gender}</div>
            ) : null}
            </div>
       
            <div class="button">
              <input type="submit" value="Register" />
            </div>
            {error ? (<div className="err1"> {error}</div>):null}
            <a href="/login">Login now</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
