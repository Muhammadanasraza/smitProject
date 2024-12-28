import React, { useState } from "react";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


const Header = () => {
<<<<<<< Updated upstream
  const isLogin = true;
=======
  const [user, setUser] = useState(null);
  const users = "admin"

  useEffect(() => {
    const stateChange = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        console.log("user", user);
      } else {
        setUser(null);
      }
    });

    return () => stateChange();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (err) {
      console.error(err);
    }
  };
>>>>>>> Stashed changes

  return (
    <nav className="bg-gray-100 items-center mx-auto border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://img.freepik.com/free-photo/view-3d-book-with-graduation-cap_23-2151103704.jpg?ga=GA1.1.518592586.1717923796&semt=ais_hybrid"
            className="h-8 rounded-full"
            alt="Flowbite Logo"
          />
          <span className="self-center font-extrabold text-2xl  whitespace-nowrap dark:text-white">
            M-System
          </span>

        </a>
<<<<<<< Updated upstream
        {
          isLogin ?
            <Sheet>
              <SheetTrigger>
                <Avatar>
                  <AvatarImage className="cursor-pointer" src="https://img.freepik.com/free-photo/portrait-curly-headed-man-wearing-casual-maroon-t-shirt_176532-8142.jpg?ga=GA1.1.518592586.1717923796&semt=ais_hybrid" alt="@shadcn" />
                  <AvatarFallback>pic</AvatarFallback>
                </Avatar>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader className="mt-7  font-medium ">
                  <a href="/">
                    <SheetTitle className='border-b-2 pt-1 flex hover:text-zinc-600 '>
                      Home

                    </SheetTitle>
                  </a>
                  <a href="#">
                    <SheetTitle className='border-b-2 pt-1 flex hover:text-zinc-600'>
                      Profile

                    </SheetTitle>
                  </a>
                  <a href="/dachboard">
                    <SheetTitle className='border-b-2 pt-1 flex hover:text-zinc-600'>
                      Dachboard

                    </SheetTitle>
                  </a>
                  <a href="/trainer">
                    <SheetTitle className='border-b-2 pt-1 flex hover:text-zinc-600'>
                      Trainer

                    </SheetTitle>
                  </a>
                </SheetHeader>

              </SheetContent>
            </Sheet>

            //   <DropdownMenu className="cursor-pointer">

            //   <DropdownMenuTrigger asChild>
            //     {/* <Button variant="outline">Open</Button> */}

            //   </DropdownMenuTrigger>
            //   <DropdownMenuContent className="w-56">
            //     <DropdownMenuLabel>My Account</DropdownMenuLabel>
            //     <DropdownMenuSeparator />
            //     <DropdownMenuGroup>
            //       <a href="/">
            //         <DropdownMenuItem>
            //           Home
            //         </DropdownMenuItem>
            //       </a>
            //       <a href="/dashboard">
            //         <DropdownMenuItem>
            //           Dachboard
            //         </DropdownMenuItem>
            //       </a>
            //       <a href="/profile">
            //         <DropdownMenuItem>
            //           Profile
            //         </DropdownMenuItem>
            //       </a>


            //       <a href="/appointment">
            //         <DropdownMenuItem>
            //           My Appointment
            //           <DropdownMenuShortcut>⌘</DropdownMenuShortcut>
            //         </DropdownMenuItem>
            //       </a>
            //     </DropdownMenuGroup>
            //     <DropdownMenuSeparator />

            //     <form

            //     >
            //       <button className="pl-2 hover:bg-slate-100 rounded-sm w-full text-left" type="submit"> Logout</button>
            //     </form>



            //   </DropdownMenuContent>

            // </DropdownMenu>
            :
            <Button className="max-sm:hidden">Login
=======
        {user ? (
          <Sheet>
            <SheetTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src={user.photoURL} alt={user.displayName || "User avatar"} />
                <AvatarFallback>{user.displayName ? user.displayName.charAt(0).toUpperCase() : "U"}</AvatarFallback>
              </Avatar>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="text-left">
                <SheetTitle className="text-2xl font-bold">Profile</SheetTitle>
                <SheetDescription>
                  <div className="flex items-center space-x-4 mt-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={user.photoURL} alt={user.displayName || "User avatar"} />
                      <AvatarFallback>{user.displayName ? user.displayName.charAt(0).toUpperCase() : "U"}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="text-xl font-semibold">{user.displayName || "User"}</h2>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
              <Separator className="my-4" />
              <nav className="flex flex-col space-y-4">
              <a href="/profile" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </a>
                <a href="/" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </a>
               
                <a href="/dashboard" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <LayoutDashboard className="h-5 w-5" />
                  <span>Dashboard</span>
                </a>
                <a href="/student" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <GraduationCap className="h-5 w-5" />
                  <span>Students</span>
                </a>
                <a href="/trainers" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <GraduationCap className="h-5 w-5" />
                  <span>Tainers</span>
                </a>
                <a href="/courses" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <GraduationCap className="h-5 w-5" />
                  <span>Courses</span>
                </a>
                {
                  users? 
                <a href="/requests" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <GraduationCap className="h-5 w-5" />
                  <span>Course Requests</span>
                </a>: ""
                }
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <a href="/login">
            <Button className="text-white">
              Login
>>>>>>> Stashed changes
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
        }


      </div>
    </nav>


  );
};

export default Header;