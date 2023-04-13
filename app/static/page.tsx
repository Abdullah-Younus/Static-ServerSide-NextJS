import React from 'react';

type Book = {
    id: number;
    name: string;
    type: string;
    available: boolean;
};


async function getBooks() {
    const books = await fetch('https://simple-books-api.glitch.me/books');
    const data = books.json();
    return data;
}

async function staticPage() {
    const books = await getBooks();
    console.log('Books ==>', books);
    return (
        <div>
            <h1>Static Page</h1>
            {books.map((book: Book) => (
                <ul key={book.id}>
                    <li>{book.name} - {book.type} - {book.available}</li>
                </ul>
            ))}
        </div>
    )
}

export default staticPage;