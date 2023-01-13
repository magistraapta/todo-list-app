"use client"
import '../styles/globals.css'
import React, { use, useState } from 'react'

function page() {
    const [items, setItems] = useState('')
    const [todos, setTodos] = useState([{title: " "}])

    const addTodos = (items: any) => {
        setTodos([...todos, {title : items }])
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        addTodos(items)
        setItems(" ")
    }
  return (
    <div className='mt-20'>
        <form onSubmit={handleSubmit} className='flex justify-center'>
            <input placeholder='ketik di sini' type="text" className=' px-2 rounded-lg border border-spacing-4 border-blue-600' value={items} onChange={(e) => setItems(e.target.value)} />
            <input type="submit"  value={'tambah'} className='ml-2 rounded-lg px-4 py-2 text-white bg-blue-600'/>
        </form>
        <div className='flex justify-center'>
            <ul className=''>
                {todos.map((todos) => { return <li className='py-2'>{todos.title}</li>})}
            </ul>
        </div>
    </div>
  )
}

export default page

