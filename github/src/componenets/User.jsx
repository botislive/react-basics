const User = ({ userdata }) => {

  return (
    <div className="mt-8 bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md text-center">

      <img
        src={userdata.avatar_url}
        alt="avatar"
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
      />

      <h2 className="text-2xl font-bold text-blue-400">
        {userdata.login}
      </h2>

      <p className="text-gray-300 mb-4">
        {userdata.bio || "No bio available"}
      </p>

      <div className="grid grid-cols-2 gap-4 text-sm mt-4">

        <p><span className="text-gray-400">Name:</span> {userdata.name || "N/A"}</p>
        <p><span className="text-gray-400">Location:</span> {userdata.location || "N/A"}</p>
        <p><span className="text-gray-400">Followers:</span> {userdata.followers}</p>
        <p><span className="text-gray-400">Following:</span> {userdata.following}</p>
        <p><span className="text-gray-400">Repos:</span> {userdata.public_repos}</p>

      </div>

      <a
        href={userdata.html_url}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold"
      >
        View Profile
      </a>

    </div>
  )
}

export default User
