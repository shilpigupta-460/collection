import axios from 'axios';
import { handle } from 'express/lib/application';
import React, { useEffect, useState } from 'react'

const Add = () => {
    const [book, setBook] = useState({
        title: '',
        des: '',
        cover: ''
    })
    const handleChange = (e) => {
        setBook(prev => ({ ...prev, [e.target.name]: e.target.value }))

    }
    const handleAdd = (e) => {
        e.preventDefault()


        const fetchBooks = async () => {
            try {
                const res = await axios.post("http://localhost:4000/book", { book });
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchBooks();
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <form onSubmit={handleAdd}>
                <input type="text" value={book.title} onChange={handleChange} name="title" />
                <input type='text' max={255} value={book.des} onChange={handleChange} name="des" />
                <input type='file' style={{ display: 'none' }} id='img' onChange={handleChange} name="cover" />
                <label htmlFor='img'>Uplaod</label>
                <button> Add</button>
            </form>
        </div>
    )
}

export default Add