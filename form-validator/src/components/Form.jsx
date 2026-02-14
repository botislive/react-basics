import React, { useState } from "react"

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})

  const handleFormSubmit = (e) => {
    e.preventDefault()

    if (
      !validateUsername(username) ||
      !validateEmail(email) ||
      !validatePassword(password)
    ) {
      console.log("Error")
    } else {
      console.log("Success")
      setIsSubmitted(true)
    }
  }

  const validateUsername = (val) => {
    if (val.trim().length < 6) {
      setErrors((p) => ({ ...p, name: "Min 6 characters required" }))
      return false
    }
    setErrors((p) => ({ ...p, name: null }))
    return true
  }

  const validateEmail = (val) => {
    if (!val.trim()) {
      setErrors((p) => ({ ...p, email: "Email is required" }))
      return false
    }
    if (!/\S+@\S+\.\S+/.test(val)) {
      setErrors((p) => ({ ...p, email: "Invalid email format" }))
      return false
    }
    setErrors((p) => ({ ...p, email: null }))
    return true
  }

  const validatePassword = (val) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/

    if (!val.trim()) {
      setErrors((p) => ({ ...p, password: "Password required" }))
      return false
    }
    if (!regex.test(val)) {
      setErrors((p) => ({
        ...p,
        password: "Weak password",
      }))
      return false
    }
    setErrors((p) => ({ ...p, password: null }))
    return true
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">

      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-3xl p-8 w-full max-w-md border border-white/30">

        <h1 className="text-3xl font-bold text-center text-white mb-6">
          ✨ Form Validator
        </h1>

        <form onSubmit={handleFormSubmit} className="space-y-5">

          {/* Username */}
          <div>
            <label className="text-white font-medium">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
                validateUsername(e.target.value)
              }}
              className="w-full mt-1 px-4 py-2 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter username"
            />
            {errors.name && (
              <p className="text-red-300 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-white font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                validateEmail(e.target.value)
              }}
              className="w-full mt-1 px-4 py-2 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="text-red-300 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-white font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                validatePassword(e.target.value)
              }}
              className="w-full mt-1 px-4 py-2 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="text-red-300 text-sm mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-white text-indigo-600 font-semibold py-2 rounded-xl shadow-lg hover:scale-105 hover:bg-indigo-100 transition duration-200"
          >
            Submit 🚀
          </button>

          {isSubmitted && (
            <p className="text-green-300 text-center font-semibold mt-3">
              ✅ Form Submitted Successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Form
