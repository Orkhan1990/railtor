import { useState } from "react"

const SignIn = () => {
const[formData,setFormData]=useState({
   email:"",
   password:""
});




  const handleChange=(e)=>{
    setFormData((prevData)=>({
      ...prevData,
      [e.target.id]:[e.target.value]
    }))
  }

  console.log(formData);
  return (
    <section className="mt-5 max-w-6xl mx-auto">
      <h1 className="text-center font-bold text-3xl">Sign In</h1>
      <div>
        <img src="./images/signInPage.jpg" alt="signIn" />
      </div>
      <div>
        <form>
          <input onChange={handleChange} type="email" placeholder="Email" id="email" value={formData.email}/>
          <input onChange={handleChange} type="password" placeholder="Password" id="password" value={formData.password}/>
        </form>
      </div>
    </section>
  )
}

export default SignIn