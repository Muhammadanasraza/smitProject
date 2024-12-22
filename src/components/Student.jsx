'use client'

import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
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

export default function st() {
  return (
    <div className="container max-w-screen-xl px-5 py-10 mx-auto">
      <h1 className="title-font sm:text-4xl text-3xl py-10 mb-4 font-bold text-gray-900">
        Enrolled Courses
      </h1>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {courses.map((course, index) => (
          <div key={index} className="flex relative h-60 max-sm:w-full">
            <img
              alt={`${course.title} course`}
              className="absolute inset-0 w-full h-full object-cover rounded-xl object-center"
              src="https://img.freepik.com/free-psd/back-school-new-normal-banner_23-2149027689.jpg"
            />
            <Card className="p-2 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
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
    </div>
  )
}

