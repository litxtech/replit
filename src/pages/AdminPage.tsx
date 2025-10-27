export function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Users</h2>
            <p className="text-3xl font-bold text-blue-600">1,234</p>
            <p className="text-gray-600">Total registered users</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            <p className="text-3xl font-bold text-green-600">567</p>
            <p className="text-gray-600">Active projects</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Revenue</h2>
            <p className="text-3xl font-bold text-purple-600">$12,345</p>
            <p className="text-gray-600">Monthly revenue</p>
          </div>
        </div>
      </div>
    </div>
  )
}
