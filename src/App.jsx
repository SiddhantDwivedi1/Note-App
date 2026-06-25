import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted');

  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 items-start flex-col p-10'>
        <h1 className='text-4xl font-bold'>Add Notes</h1>

        <input type="text" placeholder='Enter Notes Heading' className='px-5 py-2 w-full outline-none border-2 font-medium rounded' />

        <textarea type="text" placeholder='Write Details' className='px-5 py-2 h-32 w-full outline-none border-2 font-medium rounded' />

        <button className='bg-white text-black px-5 py-2 w-full font-medium outline-none rounded'>Add Notes</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 m-5 h-full overflow-auto'>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
        </div>
      </div>
    </div>
  )
}

export default App
