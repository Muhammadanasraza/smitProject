import React from 'react'

import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { Badge } from './ui/badge'

function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container max-w-screen-xl  px-5 py-24 mx-auto">

        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative h-60 max-sm:w-[335px]">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover rounded-xl object-center"
                src="https://img.freepik.com/free-psd/back-school-new-normal-banner_23-2149027689.jpg?ga=GA1.1.518592586.1717923796&semt=ais_hybrid"
              />
              <Card className="p-2 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    Web and Mobile Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-col gap-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative h-60 max-sm:w-[335px]">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover rounded-xl object-center"
                src="https://img.freepik.com/free-psd/back-school-new-normal-banner_23-2149027689.jpg?ga=GA1.1.518592586.1717923796&semt=ais_hybrid"
              />
              <Card className="p-2 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    Web and Mobile Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-col gap-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative h-60 max-sm:w-[335px]">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover rounded-xl object-center"
                src="https://img.freepik.com/free-psd/back-school-new-normal-banner_23-2149027689.jpg?ga=GA1.1.518592586.1717923796&semt=ais_hybrid"
              />
              <Card className="p-2 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    Web and Mobile Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-col gap-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </section >

  )
}

export default Hero