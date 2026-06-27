import React from 'react'

const NoteCard = ({ elem, idx, deleteNote }) => {
    return (
        <div className='relative h-52 w-40 rounded-xl text-black pt-9 pb-12 px-4 bg-cover bg-[url("https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-2-cover.jpg")]'>
            <div className='overflow-hidden h-full'>
                <h3 className='leading-tight text-xs font-bold'>{elem.title}</h3>
                <p className='mt-3 leading-tight font-semibold text-gray-600 text-xs line-clamp-4'>{elem.details}</p>
            </div>
            <button onClick={() => deleteNote(elem.id, idx)} className='absolute bottom-4 left-4 right-4 cursor-pointer active:scale-95 bg-red-500 text-white py-1 text-xs rounded'>Delete</button>
        </div>
    )
}

export default NoteCard