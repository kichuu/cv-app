import React, { useState } from "react";
export default function Form() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        degree: "",
        university: "",
        gradYear: "",
        jobTitle: "",
        company: "",
        employmentDates: "",
        skills: "",
    });
    
    const handleChange= (e) => {
        const {id , value} = e.target
        setFormData((prevstate) => ({
            ...prevstate,
            [id] : value
        }))
    }

    const handleSubmit= (e)=>{
        e.preventDefault()
        console.log(formData)
    }
    

    return (
      <div className='p-5 col-span-3'>
          <form onSubmit={handleSubmit} className='bg-white border-solid rounded-xl	 border-4 p-2 border-sky-500 flex-auto flex flex-col space-y-6'>
              <h1 className='text-xl font-semibold'>General</h1>
              <label htmlFor="name" className=''>Name</label>
              <input 
                id='name' 
                type="text" 
                value={formData.name}
                onChange={handleChange}
                className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              
              <label htmlFor="email" className=''>Email</label>
              <input 
                id='email' 
                type="email" 
                value={formData.email}
                onChange={handleChange}
                className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              
              <label htmlFor="phone" className=''>Phone</label>
              <input 
                type="number" 
                id="phone" 
                value={formData.phone}
                onChange= {handleChange}
                className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              
              <h1 className='text-xl font-semibold mt-6 mb-4'>Education</h1>
              
              <label htmlFor="degree" className=''>Degree</label>
              <input 
                id='degree' 
                type="text" 
                value={formData.degree}
                onChange={handleChange}
                className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              
              <label htmlFor="university" className=''>University</label>
              <input 
                id='university' 
                type="text" 
                value={formData.university}
                onChange={handleChange}
                className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              
              <label htmlFor="grad-year" className=''>Graduation Year</label>
              <input 
                id='gradYear' 
                type="number" 
                value={formData.gradYear}
                onChange={handleChange}
                className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              
           
              <h1 className='text-xl font-semibold mt-6 mb-4'>Professional Experience</h1>
              
              <label htmlFor="job-title" className=''>Job Title</label>
              <input 
                id='jobTitle' 
                type="text" 
                value={formData.jobTitle}
                onChange={handleChange}
                className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              
              <label htmlFor="company" className=''>Company</label>
              <input 
                id='company' 
                type="text" 
                value={formData.company}
                onChange={handleChange}
                className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              
              <label htmlFor="dates-employment" className=''>Years of Employment</label>
              <input 
                id='employmentDates' 
                type="number" 
                value={formData.employmentDates}
                onChange={handleChange}
                className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              
              <h1 className='text-xl font-semibold mt-6 mb-4'>Skills / Other</h1>
              
              <label htmlFor="skills" className=''>Skills (optional)</label>
              <input 
                id='skills' 
                type="text" 
                value={formData.skills}
                onChange={handleChange}
                className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <div className="flex justify-center">
             <button 
              type="submit" 
              className='mt-6 bg-[#FF6F61] text-white py-2 px-4 rounded-md max-w-28	 hover:bg-[#e55a4a] focus:outline-none focus:ring-2 focus:ring-blue-500'>
              Submit
            </button>
            </div>
          </form>
      </div>
    )
  }
  
