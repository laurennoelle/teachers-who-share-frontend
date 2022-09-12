import React, {useState, useEffect} from 'react'
import Search from './Search'
import Footer from './Footer'
import CatalogCollection from './CatalogCollection'
import { Container } from 'semantic-ui-react'


// const API = ("http://localhost:3000/resources")

function Catalog({resources}) {
  // const [resources, setResources] = useState([])
  const [search, setSearch] = useState("")

  // useEffect(() => {
  //   fetch(API)
  //   .then(res => res.json())
  //   .then(setResources)
  // }, [])

  // function addResource(resource) {
  //   const oneMoreResource = [...resources, resource]
  //   setResources(oneMoreResource)
  // }

  // const addResource = (newResource) => {
  //   setResources((resourceObj) => [...resourceObj, newResource])
  // }

  function searchForResources(e) {
    setSearch(e.target.value)
  }
  
  const searchedResources = resources.filter((r) => r.title.toLowerCase().includes(search.toLowerCase()) || r.subject.toLowerCase().includes(search.toLowerCase()))
    
    return (
   <Container>
      <Search search={search} searchForResources={searchForResources} />
      <CatalogCollection resources={searchedResources}/>
        {/* <section>
          <Footer/>
        </section> */}
    </Container>
  )
}

export default Catalog