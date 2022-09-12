import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

function CreateResource() {
//  const [checked, setChecked] = useState(false)
 const [title, setTitle] = useState("");
 const [subject, setSubject] = useState("");
 const [grade, setGrade] = useState("");
 const [description, setDescription] = useState("");
 const [image, setImage] = useState("");
 const [reviews, setReviews] = useState("");
 

//  let navigate = useHistory()

//  const handleOnChange = (e) => {
//   const {name, value} = e.target
//   setFormData(formDataObj => ({...formDataObj, [name]:value}))
//  }

 const handleSubmit = (e) => {
  e.preventDefault()
  fetch("http://localhost:3000/resources", {
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
    },
    body: JSON.stringify({
      title: title, 
      subject: subject,
      grade: grade,
      description: description,
      image: image,
      reviews: reviews,
    }),
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
  // .then(navigate('/catalog'))

  console.log('form sent')
 };

  return (
    <div>
    <div class="relative overflow-hidden bg-white">
      <div class="mx-auto max-w-7xl">
        <div class="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <div>
            <div class="relative px-4 pt-1 sm:px-6 lg:px-8">
            </div>    
          </div>
          <main class="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-10">
            {/* logo */}
            <div class="sm:text-center lg:text-left">
            <img src="https://i.imgur.com/HbEPFw9.png" alt="logo" />
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
              {/* Resource Form */}
              <form onSubmit={handleSubmit}>
                <div class="form-group mb-6">
                  <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="title"  name="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div class="form-group mb-6">
                  <input list="hosting-plan" type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="subject" name="subject" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                  <datalist id="hosting-plan">
                    <option value="Literacy"/>
                    <option value="Back to School"/>
                    <option value="Phonics"/>
                    <option value="Math"/>
                    <option value="Science"/>
                    <option value="Social Emotional"/>
                    <option value="Social Studies"/>
                  </datalist>
                </div>
                <div class="form-group mb-6">
                  <input type="number" min="0" max="6" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="grade" name="grade" placeholder="Grade" value={grade} onChange={(e) => setGrade(e.target.value)}/>
                </div>
                <div class="form-group mb-6">
                  <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="image"  name="image" placeholder="Image link" value={image} onChange={(e) => setImage(e.target.value)}/>
                </div>
                <div class="form-group mb-6">
                  <input type="number" min="0" max="6" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="reviews" name="reviews" placeholder="Reviews" value={reviews} onChange={(e) => setReviews(e.target.value)}/>
                </div>
                <div class="form-group mb-6">
                  <textarea class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="description" name="description" rows="3" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                {/* <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                      <div class="flex text-sm text-gray-600">
                        <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                          <span>Upload an image</span>
                          <input id="file-upload" name="image" type="file" class="sr-only" onChange={handleOnChange} value={formData.image}/>
                        </label>
                          <p class="pl-1">or drag and drop</p>
                          <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                </div>
                </div><br></br> */}
                {/* <div class="form-group form-check text-center mb-6">
                  <button type="checkbox" class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer" id="exampleCheck87" checked/>
                  <label class="form-check-label inline-block text-gray-800" for="exampleCheck87">I give permission to share this resource</label>
                </div> */}
                <button type="submit" class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Share</button>
              </form>
            </div>
            </div>
          </main>
        </div>
      </div>
      {/* resource image poster */}
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full" src="https://i.imgur.com/l5bgAno.png" alt=""/>
      </div>
    </div>        
    </div> 

  )
}

export default CreateResource