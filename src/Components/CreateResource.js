import React from 'react'
import Footer from './Footer'
function CreateResource() {
  return (
    <div>
    <div class="relative overflow-hidden bg-white">
      <div class="mx-auto max-w-7xl">
        <div class="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg class="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
    
          <div>
            <div class="relative px-4 pt-1 sm:px-6 lg:px-8">
   
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
             
              
              
           <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
         <form >
          {/* <h1>Share a Resource Here!</h1> */}
           <div class="form-group mb-6">
            <input type="text" class="form-control block
               w-full
               px-3
               py-1.5
               text-base
              font-normal
               text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
               rounded
               transition
               ease-in-out
               m-0
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
              placeholder="Title"/>
          </div>
          <div class="form-group mb-6">
            <input type="text" class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
              placeholder="Subject"/>
           </div>
           <div class="form-group mb-6">
             <input type="number" min="0" max="6" class="form-control block
               w-full
               px-3
               py-1.5
               text-base
              font-normal
               text-gray-700
               bg-white bg-clip-padding
               border border-solid border-gray-300
               rounded
               transition
               ease-in-out
               m-0
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
              placeholder="Grade"/>
          </div>
          <div class="form-group mb-6">
            <textarea
            class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            id="exampleFormControlTextarea13"
            rows="3"
            placeholder="Description"
          ></textarea>
           </div>
         
            
               <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                 <div class="space-y-1 text-center">
                   <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                     <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                   </svg>
                       <div class="flex text-sm text-gray-600">
                         <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                           <span>Upload an image</span>
                           <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                         </label>
                           <p class="pl-1">or drag and drop</p>
                    
                         <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                       </div>
                 </div>
               </div><br></br>
           <div class="form-group form-check text-center mb-6">
            <input type="checkbox"
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              id="exampleCheck87" checked/>
            <label class="form-check-label inline-block text-gray-800" for="exampleCheck87">I give permission to share this resource</label>
          </div>
           
           
          <button type="submit" class="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Send</button>
        </form>
        
      
      
      </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full" src="https://i.imgur.com/l5bgAno.png" alt=""/>
      </div>
    </div>      
   
        <br></br>
      
     
  </div> 

  )
}

export default CreateResource