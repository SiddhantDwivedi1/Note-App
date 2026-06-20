import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted');

  }

  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex justify-between gap-4 items-start flex-col p-10'>

        <input type="text" placeholder='Enter Notes Heading' className='px-5 py-2 w-full outline-none border-2 font-medium rounded' />

        <textarea type="text" placeholder='Write Details' className='px-5 py-2 h-32 w-full outline-none border-2 font-medium rounded' />

        <button className='bg-white text-black px-5 py-2 w-full font-medium outline-none rounded'>Add Notes</button>
      </form>
      <div>

      </div>
    </div>
  )
}

export default App
