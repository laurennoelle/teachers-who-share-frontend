import React from 'react'
import CatalogCard from './CatalogCard'
import { Grid } from '@mui/material'




function Catalog({resources}) {

  const renderResources = resources.map((resource) =>{
    return (
      <CatalogCard 
      key={resource.id} 
      resource={resource}
      // title={resource.title} 
      // grade={resource.grade}
      // subject={resource.subject}
      // image={resource.image} 
      />
    )
  })
  

  return (
    <div class="py-6 bg-white bg-auto">
    <div className="grid grid-cols-3 gap-10 bg-white md:absolute md-20 w-250 mt-30 ml-50">
        
       {renderResources}
       
       </div>
       </div>
  )
}

export default Catalog