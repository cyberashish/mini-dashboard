import UsersList from "@/app/components/dashboard/UsersList";

export default async function DashboardPage() {
  return (
    <div className="max-w-[1200px] mx-auto lg:px-0 px-6">
      <h1 className="text-xl font-medium text-center">List of Users</h1>
      <UsersList />
    </div>
  );
}
