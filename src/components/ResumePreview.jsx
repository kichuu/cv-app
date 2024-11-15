import React from 'react'

export default function ResumePreview({formData}) {

  return (
    <div className=' col-span-4 grid grid-cols-8 m-5 my-10 border-sky-500 border border-4 rounded-md' >
      <div className='bg-sky-600 col-span-3 py-10'>
        <div className='flex justify-center'>
        <div className='bg-red-500  w-32 h-32 border-4 border-sky-500  rounded-full '></div>
        </div>
        <h2>Email :{formData.email}</h2>
      </div>
      <div className='bg-white col-span-5'></div>
    </div>
  )
}
