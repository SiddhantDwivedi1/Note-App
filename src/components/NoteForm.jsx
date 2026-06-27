import React from 'react'

const NoteForm = ({ title, details, setTitle, setDetails, submitHandler }) => {
    return (
        <form onSubmit={submitHandler} className='flex gap-4 lg:w-1/2 items-start flex-col p-10'>
            <h1 className='text-4xl font-bold'>Add Notes</h1>

            <input type="text" placeholder='Enter Notes Heading' className='px-5 py-2 w-full outline-none border-2 font-medium rounded'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea placeholder='Write Details Here' className='px-5 py-2 h-32 w-full outline-none border-2 font-medium rounded'
                value={details}
                onChange={(e) => setDetails(e.target.value)}
            />

            <button className='bg-white text-black active:scale-95 cursor-pointer px-5 py-2 w-full font-medium outline-none rounded'>Add Notes</button>
        </form>
    )
}

export default NoteForm