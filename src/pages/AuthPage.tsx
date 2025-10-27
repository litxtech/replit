export function AuthPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Authentication</h1>
        <div className="space-y-4">
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            Sign in with Google
          </button>
          <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition-colors">
            Sign in with GitHub
          </button>
          <div className="text-center text-gray-500">or</div>
          <div className="space-y-4">
            <input 
              type="email" 
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="password" 
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
