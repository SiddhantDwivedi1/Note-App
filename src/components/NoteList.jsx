import React from 'react'
import NoteCard from './NoteCard'

const NoteList = ({ task, deleteNote }) => {
    return (
        <div className='lg:w-1/2 lg:border-l-2 p-10'>
            <h1 className='text-4xl font-bold'>Recent Notes</h1>
            <div style={{ scrollbarWidth: 'none' }} className='flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto'>
                {task.map((elem, idx) => (
                    <NoteCard key={elem.id} elem={elem} idx={idx} deleteNote={deleteNote} />
                ))}
            </div>
        </div>
    )
}

export default NoteList