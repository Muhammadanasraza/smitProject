import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/auth/utils/authutils";
import { Columns } from "lucide-react";

const Header = () => {
  const [Login, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stateChange = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setLogin(true);
        console.log("user",user)
      } else {
        setLogin(false);
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

  return (
    <nav className="bg-gray-100 items-center mx-auto border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://img.freepik.com/free-photo/view-3d-book-with-graduation-cap_23-2151103704.jpg?ga=GA1.1.518592586.1717923796&semt=ais_hybrid"
            className="h-8 rounded-full"
            alt="Flowbite Logo"
          />
          <span className="self-center font-extrabold text-2xl  whitespace-nowrap dark:text-white">
            M-System
          </span>
        </a>
        {Login && user ? (
          <Sheet>
            <SheetTrigger>
              <Avatar>
                <AvatarImage
                  className="cursor-pointer list-image-none"
                  src={
                    user.photoURL
                  }
                  alt="@shadcn"
                />
                <AvatarFallback>pic</AvatarFallback>
              </Avatar>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="mt-7  font-medium ">
                <a href="/">
                  <SheetTitle className="border-b-2 pt-1 flex hover:text-zinc-600 ">
                    Home
                  </SheetTitle>
                </a>
                <a href="#">
                  <SheetTitle className="border-b-2 pt-1 flex hover:text-zinc-600">
                    Profile
                  </SheetTitle>
                </a>
                <a href="/dachboard">
                  <SheetTitle className="border-b-2 pt-1 flex hover:text-zinc-600">
                    Dachboard
                  </SheetTitle>
                </a>
                <a href="/trainer">
                  <SheetTitle className="border-b-2 pt-1 flex hover:text-zinc-600">
                    Trainer
                  </SheetTitle>
                </a>
                <button onClick={() => handleLogout()}>
                  <SheetTitle className="border-b-2 pt-1 flex hover:text-zinc-600">
                    Logout
                  </SheetTitle>
                </button>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        ) : (
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
          <a href="/login">
            <Button className="max-sm:hidden">
              Login
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
          </a>
        )}
      </div>
    </nav>
  );
};

export default Header;
