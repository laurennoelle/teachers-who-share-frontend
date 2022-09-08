import React from 'react'
import Footer from './Footer'

function Home() {
  return (
   
    <div class="relative overflow-hidden bg-white">
      <div class="mx-auto max-w-7xl">
        <div class="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg class="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
    
          <div>
            <div class="relative px-4 pt-6 sm:px-6 lg:px-8">
   
            </div>
    
       
            {/* <div class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
              <div class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div class="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
                  </div>
             
                </div>
   
              </div>
            </div> */}
          </div>
    
          <main class="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left">
              <img src="https://i.imgur.com/HbEPFw9.png" alt="logo" /><br></br>
              <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block xl:inline">Online resources for</span>
                <span class="block text-pink-700 xl:inline">busy teachers</span>
              </h1>
              <p class="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">Welcome! This app is intended for teachers who have created great resources to share, making it easier to focus on what really matters and save you precious time without having to reinvent the wheel, enjoy!</p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <a href="/catalog" class="flex w-full items-center justify-center rounded-md border border-transparent bg-pink-700 px-8 py-3 text-base font-[Poppins] text-white hover:bg-yellow-400 duration-500 md:py-4 md:px-10 md:text-lg">Start browsing</a>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <a href="/shareresource" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg">Share a Resource</a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full" src="https://i.imgur.com/FqsF1Dy.jpg" alt=""/>
      </div>
      {/* <section>
        <Footer/>
      </section> */}
    </div>      
  )
}

export default Home
    
 