import React from 'react';

type Book = {
    id: number;
    name: string;
    type: string;
    available: boolean;
}

async function getBooks() {
    const books = await fetch('https://simple-books-api.glitch.me/books', {
        cache: 'no-store'
    });
    const data = books.json();
    return data;
}



async function page() {

    const books = await getBooks();

    return (
        <div>
            <h1>Sever Side Page</h1>
            {books.map((book: Book) => (
                <div key={book.id}>
                    <h1>{book.name}</h1>
                    <h1>{book.type}</h1>
                </div>
            ))}
        </div>
    )
}

export default page;