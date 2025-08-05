"use client";
import { useGetUsersQuery } from "@/app/store/slices/usersApiSlice";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import ListSkeleton from "./ListSkeleton";
  
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]

    
  
  export default function UsersList() {
    const { data: usersInfo, error, isLoading } = useGetUsersQuery({});
    if(isLoading){
        return (<ListSkeleton/>)
    } 
    if(error){
        return <p className="text-red-500 text-center" >Users not found</p>
    }
    if(usersInfo){
        const modifedUsers = usersInfo.users?.map((user:any,index:number) => {
            return {...user,status: index % 2 === 0 ? 'Active' : 'Inactive', }
        })
        return (
            <div className="border border-border rounded-md md:overflow-hidden mt-6 md:max-w-full max-w-[700px] overflow-auto" >
          <Table>
            <TableCaption>A list of users.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Phone</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {modifedUsers.slice(0,20).map((user:any) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{`${user.firstName} ${user.lastName}`}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <span className={`py-1 px-2 rounded-md ${user.status === "Active" ? 'bg-success' : 'bg-warning'} text-white`} >{user.status}</span>
                  </TableCell>
                  <TableCell>{user.gender}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>
        )
    }
 
  }
  