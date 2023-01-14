"use client"
import '../styles/globals.css'
import React, { useState } from 'react'

function page() {
    const [items, setItems] = useState('')
    const [todos, setTodos] = useState([{title: 'ngoding' , id: 1}])

    const addTodos = (items: any) => {
        setTodos([...todos, {title : items,  id: Math.random()}])
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        addTodos(items)
        setItems('')
    }
  return (
    <div>
        <div className=' bg-blue-600 flex justify-center'>
            <div className='my-12 text-center'>
                <h1 className='text-white text-5xl font-bold'>😭 To do list</h1>
                <p className='text-white font-semibold text-3xl mt-5'>Mau ngapain hari ini</p>
            </div>
        </div>
        <div className=' rounded-lg mt-6 mx-96 bg-slate-100'>
            <div className='flex justify-center'>
                <h1 className='text-center pt-9 mx-12 text-4xl max-w-md font-semibold'>Tulis kegiatan kamu agar semakin produktif</h1>
            </div>
            <div className='mt-9 pb-9 mx-36'>
                <div className='flex justify-center'>
                    <form onSubmit={handleSubmit}>
                        <input placeholder='Ketik di sini' type="text" className=' pl-2 border rounded-md border-spacing-4 py-1 border-blue-600' onChange={(e)=> setItems(e.target.value)}/>
                        <input type="submit" value={"Tambah"} className='ml-4 px-4 py-1 bg-blue-600 text-white rounded-md' />
                    </form>
                </div>
                <ul className=' mx-12 mt-4'>
                    {todos.map((todos) => {
                        return ( <li key={todos.id} className='py-2'>{todos.title} <input type="checkbox" /></li>)
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default page

