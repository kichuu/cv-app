import React from 'react'

export default function Body({children}) {
  return (
    <div className='grid grid-cols-7 gap-2'>
        {children}
    </div>
  )
}