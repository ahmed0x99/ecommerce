import { useFormik } from 'formik'
import * as Yup from 'yup'
import React from 'react'

export default function Login() {
  let formik = useFormik({
    initialValues:{
      name : "",
      email : "",
      phone: "",
      password: "",
      rePassword: "",
    },validationSchema:Yup.object({
      name:Yup.string().min(13)
    }),
    onSubmit:(values) => {
      console.log(formik.errors);
    }
  })
  return (
    <form onSubmit={formik.handleSubmit} className='bg-gray-100 w-1/2 text-center p-3 '>
      <div>
        <input type="name" className='border rounded-md bg-transparent placeholder:text-gray-500 text-center p-1'  name="name" placeholder='Name' id="name" onChange={formik.handleChange}
        value={formik.values.name}
        />
 {formik.errors.name && formik.touched.name && (
            <p className="text-red-500 text-sm">{formik.errors.name}</p>
          )}      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" onChange={formik.handleChange}
        value={formik.values.email} />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" onChange={formik.handleChange}
        value={formik.values.password} />
      </div>

        <div>
        <label htmlFor="rePassword">Re-Password:</label>
        <input type="password" name="rePassword" id="rePassword" onChange={formik.handleChange}
        value={formik.values.rePassword} />
      </div>

        <div>
        <label htmlFor="phone">Phone:</label>
        <input type="phone" name="phone" id="phone" onChange={formik.handleChange}
        value={formik.values.phone} />
      </div>

      <button type='submit'>Login</button>
    </form>
  )
}
