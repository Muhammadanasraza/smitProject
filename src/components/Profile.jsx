'use client'

import React, { useEffect, useState } from "react";
import { auth } from "@/auth/utils/authutils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Calendar, Code, Palette, Book } from 'lucide-react';

// Mock data for enrolled courses and attendance history
const enrolledCourses = [
  { id: 1, name: "Introduction to React", progress: 75, icon: Code },
  { id: 2, name: "Advanced JavaScript", progress: 50, icon: Code },
  { id: 3, name: "UI/UX Design Principles", progress: 90, icon: Palette },
  { id: 4, name: "Data Structures and Algorithms", progress: 30, icon: Book },
];

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
    <div className="max-w-4xl mx-auto p-4 space-y-6">
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

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center">
            <GraduationCap className="mr-2" /> Enrolled Courses
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {enrolledCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <CardHeader className="p-4">
                  <div className="flex items-center space-x-2">
                    <course.icon className="h-6 w-6 text-blue-500" />
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="mt-2">
                    <div className="text-sm font-medium text-gray-500 mb-1">
                      Progress: {course.progress}%
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
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

