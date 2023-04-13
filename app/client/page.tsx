"use client"
import React from 'react';

type Book = {
    id: number;
    name: string;
    type: string;
    available: boolean;
}

async function getBooks() {
    const books = await fetch('https://simple-books-api.glitch.me/books');
    const data = books.json();
    return data;
}

async function page() {
    const books = await getBooks();

    return (
        <div>Client</div>
    )
}

export default page