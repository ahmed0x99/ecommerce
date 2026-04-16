import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function Login({setUserToken}) {

  const [loading, setLoading] = useState(false)
  const [apiErrors, setApiErrors] = useState("")
  
  let navi = useNavigate()




  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().min(3).max(19).required('Password is required'),
    
    }),
    onSubmit: async (values) => {
      // console.log(props);

      setLoading(true)
      let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values).catch((error) => {
        setLoading(false)
        // console.log(error.response.data.message);
     
        setApiErrors(error.response.data.message);
      })
      if (data.message === "success") {
        setLoading(false)
        localStorage.setItem("userToken" , data.token)
        // console.log(setUserToken);
        setUserToken(data.token)
        navi("/")

      }
    }
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-1/3 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>
        { (apiErrors.length > 0) ? <div class="bg-red-100 rounded-lg py-5 px-6 text-base text-red-700 mb-3" role="alert">
        {apiErrors}
    </div> : null}


        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}
        </div>

      
        {/* Password */}
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <p className="text-red-500 text-sm">{formik.errors.password}</p>
          )}
        </div>

     

        {/* Button */}

        {loading ? <button type="button" class="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg max-w-md">
          <svg width="20" height="20" fill="currentColor" class="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
            </path>
          </svg>
          loading
        </button> : <button
          disabled={!formik.isValid && formik.dirty}
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>}

      </form>
    </div>
  );
}