export default function ListSkeleton() {
  return (
    <>
<div className="p-6">
  <div className="overflow-x-auto rounded-lg border border-gray-200">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Gender</th>
          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Phone</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 animate-pulse">
        <tr className="bg-white" >
          <td className="px-4 py-3">
            <div className="h-4 w-32 bg-gray-300 rounded"></div>
          </td>
          <td className="px-4 py-3">
            <div className="h-4 w-48 bg-gray-300 rounded"></div>
          </td>
          <td className="px-4 py-3">
            <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
          </td>
          <td className="px-4 py-3">
            <div className="h-4 w-20 bg-gray-300 rounded"></div>
          </td>
          <td className="px-4 py-3">
            <div className="h-4 w-28 bg-gray-300 rounded"></div>
          </td>
        </tr>
        <tr className="bg-white">
          <td className="px-4 py-3"><div className="h-4 w-32 bg-gray-300 rounded"></div></td>
          <td className="px-4 py-3"><div className="h-4 w-48 bg-gray-300 rounded"></div></td>
          <td className="px-4 py-3"><div className="h-6 w-16 bg-gray-300 rounded-full"></div></td>
          <td className="px-4 py-3"><div className="h-4 w-20 bg-gray-300 rounded"></div></td>
          <td className="px-4 py-3"><div className="h-4 w-28 bg-gray-300 rounded"></div></td>
        </tr>

        <tr className="bg-white">
          <td className="px-4 py-3"><div className="h-4 w-32 bg-gray-300 rounded"></div></td>
          <td className="px-4 py-3"><div className="h-4 w-48 bg-gray-300 rounded"></div></td>
          <td className="px-4 py-3"><div className="h-6 w-16 bg-gray-300 rounded-full"></div></td>
          <td className="px-4 py-3"><div className="h-4 w-20 bg-gray-300 rounded"></div></td>
          <td className="px-4 py-3"><div className="h-4 w-28 bg-gray-300 rounded"></div></td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="text-sm text-gray-500 text-center mt-4">Loading users...</p>
</div>

    </>
  );
}
