import React, { useEffect, useState } from "react";
import axios from "axios";
const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await axios.get("http://localhost:4000/books");
                setBooks(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchBooks();
    }, []);
    return <div>
        <>
            <h2> Books</h2>
            <ul>
                {books && books.map(item => (

                    <li key={item.id}>
                        <h3>Title: {item.title}</h3>
                        <p>{item.des}</p>
                    </li>


                ))}
            </ul>
        </>
    </div>;
};

export default Books;
