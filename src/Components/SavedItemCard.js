import React, { useState } from 'react'

function SavedItemCard({item, handleSavedItemsRender} ) {
    // const [handleDelete, setHandleDelete] = useState([])

    function handleDeleteFromSavedItems() {
        fetch(`http://localhost:3000/saved_items/${item.id}`, {
            method: "Delete",
        }).then(handleSavedItemsRender);
    }

  return (
    <div >
            <a key={item.id} href={`/resources/${item.id}`} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={item.image}
                  alt={item.image}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{item.title}</h3>
              <span className="mt-1 text-lg font-medium text-gray-900">{item.subject}</span></a>
        <button class="inline-flex items-center py-2 px-3 text-lg font-medium text-center text-zinc-500 bg-white rounded-lg hover:bg-zinc-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  onClick={handleDeleteFromSavedItems}>ⓧ</button>
    </div> 
  
  )
}

export default SavedItemCard