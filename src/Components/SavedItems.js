import React, { useEffect, useState } from 'react'
import { Container } from 'semantic-ui-react';
import SavedItemCard from './SavedItemCard';

const APII = ("http://localhost:3000/saved_items")

function SavedItems() {
 const [renderSavedItems, setRenderSavedItems] = useState([])


 useEffect(() => {
  fetch(APII)
  .then(res => res.json())
  .then(setRenderSavedItems)
 }, [])

  const renderItems = renderSavedItems.map((item) => {
      return (
        <SavedItemCard key={item.id} item={item} />
      )
  })

  return (
    <div><br></br>
     
 <div class="bg-gray-50">
  <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      <span class="block">Love these resources?</span>
      <span class="block text-indigo-600">Add a review to help your fellow teachers!</span>
    </h2>
    <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
      <div class="inline-flex rounded-md shadow">
        <a href="#" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700">Get started</a>
      </div>
      <div class="ml-3 inline-flex rounded-md shadow">
        <a href="#" class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50">Learn more</a>
      </div>
    </div>
  </div>
</div> 

<div>
  <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
    <div class="flex justify-start item-start space-y-2 flex-col">
      <h1 class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Your Saved Items</h1>
    </div>
  </div>
</div> 

<Container/>
<div class="py-2 bg-white bg-auto">
  <div className="grid grid-cols-6  gap-10 bg-white md:absolute md-20 w-250 mt-30 ml-50 px-6">
    {renderItems}
  </div>
 </div>
 <Container/>
{/* 
            
                
                
            </div> 
           
        </div> */}
        {/* <div class="py-6 bg-white bg-auto">
            <div className="grid grid-cols-5 gap-10 bg-white md:absolute md-20 w-250 mt-30 ml-50 px-6">
              {renderItems}
              </div>
        </div> */}
  </div>
  )
}

export default SavedItems;