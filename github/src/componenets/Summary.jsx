import React, { useState } from 'react'
import User from './User'

const Summary = () => {

  const [data, setData] = useState(null)
  const [username, setUsername] = useState('')
  const [repos, setRepos] = useState(null)


  const handleApi = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`)
      const result = await response.json()
      setData(result)
      setRepos(null)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">

      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md text-center">

        <h1 className="text-3xl font-bold mb-6 text-blue-400">
          GitHub Profile Fetcher 🚀
        </h1>

        <label className="block mb-2 text-sm text-gray-300">
          Enter GitHub Username
        </label>

        <input
          className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="eg: torvalds"
        />

        <button
          onClick={handleApi}
          className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg font-semibold"
        >
          Get Details
        </button>

      </div>

      {data && <User userdata={data} repos={repos} setRepos={setRepos} />}
    </div>
  )
}

export default Summary
