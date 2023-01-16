"use client"
import '../styles/globals.css'
import React, { useState } from 'react'
import Footer from '../app/footer.jsx'
function page() {
    const [items, setItems] = useState('')
    const [todos, setTodos] = useState([{title : 'ngoding', id: 1}])

    const addTodos = (items ) => {
        setTodos([...todos, {title : items,  id: Math.random()}])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodos(items)
        setItems('')
    }

    const handleDelete = (todoId ) => {
        const filterTodos = todos.filter(function (todo) {
            return todo.id != todoId
        })
        setTodos(filterTodos);
    }
  return (
    <div>
        <div className=' bg-blue-600 flex justify-center'>
            <div className='my-12 text-center'>
                <h1 className='text-white text-5xl font-bold'>😭 To do list</h1>
                <p className='text-white font-semibold text-3xl mt-5'>Mau ngapain hari ini</p>
            </div>
        </div>
        <div className=' rounded-lg mt-6 mx-96 bg-slate-100 lg:mx-72 md:mx-48 sm:mx-24 phone:mx-8 '>
            <div className='flex justify-center '>
                <h1 className='text-center pt-9  text-4xl max-w-md font-semibold md:text-3xl  phone:text-2xl'>Tulis kegiatan kamu agar semakin produktif</h1>
            </div>
            <div className='mt-9 pb-9   '>
                <div className='flex justify-center  '>
                    <form onSubmit={handleSubmit}>
                        <input value={items}  placeholder='Ketik di sini' type="text" className=' xl:w-50 md:w-40 phone:w-32 h-8 pl-2 border rounded-md border-spacing-4 py-1 border-blue-600' onChange={(e)=> setItems(e.target.value)}/>
                        <input type="submit" value={"Tambah"} className='ml-4 px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md' />
                    </form>
                </div>
                <div className=' flex justify-center'>
                    <ul className='  mt-4   '>
                            {todos.map((todos) => {
                                return ( <li key={todos.id} className='py-2 text-lg max-w-xs  flex justify-between'>
                                    <input type="checkbox" className='  mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded flex ' />{todos.title}
                                    <button className='ml-4 px-4 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded-md ' onClick={handleDelete.bind(this, todos.id)}>Delete</button>
                                    </li>
                                    )
                            })}
                    </ul>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default page

