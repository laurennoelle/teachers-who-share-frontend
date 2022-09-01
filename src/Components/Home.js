import React from 'react'

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
              {/* <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div class="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div class="flex w-full items-center justify-between md:w-auto">
                    <a href="#">
                      <span class="sr-only">Your Company</span>
                      <img alt="Your Company" class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"/>
                    </a>
                    <div class="-mr-2 flex items-center md:hidden">
                      <button type="button" class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                  <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Product</a>
    
                  <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Features</a>
    
                  <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Marketplace</a>
    
                  <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Company</a>
    
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Log in</a>
                </div>
              </nav> */}
            </div>
    
       
            <div class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
              <div class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div class="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
                  </div>
                  {/* <div class="-mr-2">
                    <button type="button" class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span class="sr-only">Close main menu</span>
                    
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div> */}
                </div>
                {/* <div class="space-y-1 px-2 pt-2 pb-3">
                  <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Product</a>
    
                  <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Features</a>
    
                  <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Marketplace</a>
    
                  <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Company</a>
                </div> */}
                {/* <a href="#" class="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100">Log in</a> */}
              </div>
            </div>
          </div>
    
          <main class="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left">
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
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt=""/>
      </div>
    </div>
    
      
  )
}

export default Home
    
        // <div className="relative overflow-hidden bg-no-repeat bg-cover" style={background-position: 50%; background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp');height: 350px;}>
        //     <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style="background-color: rgba(0, 0, 0, 0.75)">
        //         <div className="flex justify-center items-center h-full">
        //             <div className="text-center text-white px-6 md:px-12">
        //                 <h1 className="text-5xl font-bold mt-0 mb-6">Heading</h1>
        //                 <h3 className="text-3xl font-bold mb-8">Subeading</h3>
        //                 <button type="button" className="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Get started
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>      
 


    //   <div className="bg-gray-50">
    //     <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
    //       <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
    //         <span className="block">Need resources for busy teachers?</span>
    //         <span className="block text-pink-700">Start browsing today!</span>
    //       </h2>
    //       <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
    //         <div className="inline-flex rounded-md shadow">
    //           <a
    //             href="#"
    //             className="inline-flex items-center justify-center rounded-md border border-transparent bg-pink-700 px-5 py-3 text-base font-[Poppins] text-white hover:bg-yellow-400"
    //           >
    //             Get started
    //           </a>
    //         </div>
    //         <div className="ml-3 inline-flex rounded-md shadow">
    //           <a
    //             href="#"
    //             className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
    //           >
    //             Learn more
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
 