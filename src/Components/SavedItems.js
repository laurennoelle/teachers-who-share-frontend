import React, { useEffect, useState } from 'react'
import SavedItemCard from './SavedItemCard';

const APII = ("http://localhost:3000/saved_items")

function SavedItems() {
 const [renderSavedItems, setRenderSavedItems] = useState([])
 

 useEffect(() => {
  fetch(APII)
  .then(res => res.json())
  .then(setRenderSavedItems)
 }, [])

 function handleSavedItemsRender() {
  fetch(APII)
  .then(res => res.json())
  .then(setRenderSavedItems)
 }

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
  <div class="py-7 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
    <div class="flex justify-start item-start space-y-2 flex-col">
      <h1 class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Your Saved Items</h1>
    </div>
  </div>
</div> 

<div className="bg-white mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8" >
      <div className="grid grid-cols-4 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {renderSavedItems.map((item) => (
            <SavedItemCard key={item.id} item={item} handleSavedItemsRender={handleSavedItemsRender}/>
            ))}
      </div>
    </div>
  </div>
  )
}

export default SavedItems;