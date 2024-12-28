'use client'

import React, { useEffect, useState } from "react";
import { auth } from "@/auth/utils/authutils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Calendar, Code, Palette, Book } from 'lucide-react';

// Mock data for enrolled courses and attendance history
'use client'

import { Badge } from "@/components/ui/badge"

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

const attendanceHistory = [
  { id: 1, date: "2023-03-15", course: "Introduction to React", status: "Present" },
  { id: 2, date: "2023-03-14", course: "Advanced JavaScript", status: "Absent" },
  { id: 3, date: "2023-03-13", course: "UI/UX Design Principles", status: "Present" },
  { id: 4, date: "2023-03-12", course: "Introduction to React", status: "Present" },
  { id: 5, date: "2023-03-11", course: "Advanced JavaScript", status: "Present" },
];

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="max-w-screen-xl  container mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={user.photoURL} alt={user.displayName || "User avatar"} />
              <AvatarFallback>{user.displayName ? user.displayName.charAt(0).toUpperCase() : "U"}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl font-bold">{user.displayName || "User"}</CardTitle>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Card className="p-4">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center">
            <GraduationCap className="mr-2" /> Enrolled Courses
          </CardTitle>
        </CardHeader>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {courses.map((course, index) => (
          <div key={index} className="flex relative h-60 max-sm:w-full">
            <img
              alt={`${course.title} course`}
              className="absolute inset-0 w-full h-full object-cover rounded-xl object-center"
              src="https://img.freepik.com/free-psd/back-school-new-normal-banner_23-2149027689.jpg"
            />
            <Card className=" relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-semibold">Batch: </span>
                    <span className="text-gray-600">{course.batch}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Roll: </span>
                    <span className="text-gray-600">{course.roll}</span>
                  </div>
                  <div>
                    <span className="font-semibold">City: </span>
                    <span className="text-gray-600">{course.city}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Campus: </span>
                    <span className="text-gray-600">{course.campus}</span>
                  </div>
                  <Badge className="bg-sky-100 w-fit text-sky-800 hover:bg-sky-100">
                    ENROLLED
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
        
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center">
            <Calendar className="mr-2" /> Attendance History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {attendanceHistory.map((record) => (
              <li key={record.id} className="flex justify-between items-center">
                <span>{record.date}</span>
                <span>{record.course}</span>
                <span className={`font-semibold ${
                  record.status === 'Present' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {record.status}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

