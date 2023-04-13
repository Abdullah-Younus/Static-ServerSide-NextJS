import React from 'react';



type Book = {
    id: number;
    name: string;
    type: string;
    available: boolean;
}


async function getFiction() {
    const response = await fetch('https://simple-books-api.glitch.me/books?type=fiction', {
        cache: 'no-store'
    });
    const data = response.json();
    return data;
}



async function getNonFiction() {
    const response = await fetch('https://simple-books-api.glitch.me/books?type=non-fiction', {
        cache: 'no-store'
    });
    const data = response.json();
    return data;
}



async function ParallelFetching() {

    const fictionBooks = getFiction();
    const nonFictionBooks = getNonFiction();

    const [fiction, nonfiction] = await Promise.all([fictionBooks, nonFictionBooks])

    return (
        <div>
            <h1>Fiction Books</h1>
            {fiction.map((books: Book) => (
                <div key={books.id}>
                    <h1>{books.name}</h1>
                    <h1>{books.type}</h1>
                </div>
            ))}
            <h1>Non-Fiction Books</h1>
            {nonfiction.map((books: Book) => (
                <div key={books.id}>
                    <h1>{books.name}</h1>
                    <h1>{books.type}</h1>
                </div>
            ))}
        </div>
    )
}

export default ParallelFetching;