const Repos = ({ repos }) => {
  return (
    <div className="mt-6 text-left max-h-60 overflow-y-auto scrollbar-hide">
      <h3 className="text-xl font-bold text-blue-400 mb-3">
        Repositories
      </h3>

      <ul className="space-y-3">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition"
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-300 font-semibold hover:underline"
            >
              {repo.name}
            </a>

            <p className="text-gray-300 text-sm">
              {repo.description || "No description"}
            </p>

            <p className="text-gray-400 text-xs">
  ⭐ {repo.stargazers_count} • {repo.language || "Unknown"}
</p>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default Repos
