import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import CourseCard from '@/components/CoursesCard'



function Courses() {
    return (
        <div className="container max-w-screen-xl  px-5 py-10 mx-auto">
            <h1 className="title-font sm:text-4xl text-3xl py-10 mb-4 font-bold text-gray-900">
                Courses
            </h1>
            <div className="flex flex-wrap -m-4">
               <CourseCard/>

            </div>
        </div>
    )
}

export default Courses
