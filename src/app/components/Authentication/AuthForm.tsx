"use client"

import { Icon } from "@iconify/react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";


const AuthForm = () => {

  interface formInfoType {
    email?: string,
    password?: string
  }

  const [formInfo , setFormInfo] = useState<formInfoType>();
  const router = useRouter();
  const [loading , setLoading] = useState(false);

  const handleForm = (event:any) => {
     setFormInfo({...formInfo , [event.target.name] : event.target.value})
  }

    const handleCredentials = async () => {
      setLoading(true)
     const result = await signIn('credentials',{
         email: formInfo?.email,
         password: formInfo?.password,
         redirect: false
      });
      console.log(result);
      if(!result?.error){
        router.push("/dashboard")
      }
      else{
       setLoading(false);
       toast.error("Wrong email or password" , {
        position:"top-right"
       })
      }
    }

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex w-full justify-center">
        <div className="lg:w-10/12 w-full">
          <h4 className="text-2xl font-semibold leading-none text-center">
            Welcome to MiniDash
          </h4>
          <div className="flex items-center gap-3 mt-8 justify-center flex-wrap">
          </div>
          <form onSubmit={(e) => {
             e.preventDefault();
             handleCredentials();
          }} >
          <div className="max-w-full mb-4">
            <label
              htmlFor="input-label"
              className="block text-sm text-dark font-medium mb-1 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="input-label"
              name="email"
              required
              onChange={(e:any) => handleForm(e)}
              className="py-2.5 px-4 text-dark block w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-offset-transparent focus-visible:ring-transparent focus-visible:shadow-none border-border rounded-lg text-sm focus:border-primary focus:ring-primary focus:ring-0 border focus:ring-offset-0"
              placeholder="you@site.com"
            />
          </div>
          <div className="max-w-full">
            <label
              htmlFor="input-label-password"
              className="block text-sm text-dark font-medium mb-1 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              onChange={handleForm}
              id="input-label-password"
              className="py-2.5 text-dark px-4 block w-full border-border rounded-lg focus-visible:outline-none text-sm focus:border-primary focus:ring-primary focus:ring-0 border focus:ring-offset-0"
              placeholder="✱✱✱✱✱✱"
            />
          </div>
           <Button type="submit" disabled={loading ? true : false}  className="bg-primary cursor-pointer text-white hover:bg-primary/90 w-full mt-6 text-base h-fit py-2" >
           <Loader2 className={`animate-spin ${loading ? "block" : "hidden"}`}  />
            Login Now</Button>
            </form>
            {/* Info */}
            <div className="p-3 rounded-md bg-primary/10 flex flex-col gap-2 w-fit mt-5 mx-auto">
              <div className="flex items-center gap-2 text-primary">
                <span>Email:</span>
                <span>admin@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <span>Password:</span>
                <span>123456</span>
              </div>
            </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default AuthForm;