'use client'

import React from 'react'
import {
  Card, CardHeader, CardTitle, CardContent, CardDescription,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button'

const courses = [
  {
    title: "Web and Mobile App Development",
    batch: "11",
    roll: "178084",
    city: "Karachi",
    campus: "N/A",
  },
  {
    title: "Artificial Intelligence",
    batch: "12",
    roll: "178085",
    city: "Lahore",
    campus: "Main",
  },
  {
    title: "Cloud Computing",
    batch: "10",
    roll: "178086",
    city: "Islamabad",
    campus: "N/A",
  },
  {
    title: "Blockchain",
    batch: "9",
    roll: "178087",
    city: "Karachi",
    campus: "City",
  },
  {
    title: "Internet of Things",
    batch: "13",
    roll: "178088",
    city: "Lahore",
    campus: "N/A",
  },
  {
    title: "Cybersecurity",
    batch: "11",
    roll: "178089",
    city: "Islamabad",
    campus: "Main",
  },
]

export default function Trainers() {

  const user = "admin"
  // const user = "student"


  return (
    <div className="container max-w-screen-xl px-5 py-10 mx-auto">
      <div className="justify-between flex py-10 ">

        <h1 className="title-font sm:text-4xl text-3xl  mb-4 font-bold text-gray-900">
          Trainers
        </h1>
        {
          user == "admin" ? 
          <Dialog>
            
              <DialogTrigger className="py-2 px-3 w-fit h-full font-normal text-white bg-gray-950 transition hover:bg-gray-800 rounded-sm">Add Trainer</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
           
          </Dialog> :
            ""
        }

      </div>

      <div className="container mx-auto px-1 py-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teachers.map((teacher, index) => (
            <Card key={index} className="overflow-hidden transition-shadow hover:shadow-lg">
              <CardHeader className="pb-0">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={teacher.avatar} alt={teacher.name} />
                    <AvatarFallback>{teacher.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{teacher.name}</CardTitle>
                    <CardDescription className="text-sm">{teacher.specialty}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-xs text-gray-600">Passionate educator specializing in {teacher.specialty}.</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center bg-gray-50">
                <Badge variant="secondary" className="text-xs">{teacher.code}</Badge>
                {/* <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Join Class
                </button> */}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

    </div>

  )
}

