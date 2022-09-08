import React from 'react'
import CatalogCard from './CatalogCard'
// import { Card } from 'semantic-ui-react'
import { Grid } from '@mui/material'
// import Footer from './Footer'

function CatalogCollection({resources}) {
  
    const renderResources = resources.map((resource) =>{
        return (
          <CatalogCard key={resource.id} resource={resource} />
        )
      }) 
  
    return (
        <div>
        <div class="py-6 bg-white bg-auto">
            <div className="grid grid-cols-4 gap-10 bg-white md:absolute md-20 w-250 mt-30 ml-50 px-6">
            {renderResources}
            </div>
        </div>
        {/* <div>
            <Footer/>
        </div> */}
        </div>
  )
}

export default CatalogCollection