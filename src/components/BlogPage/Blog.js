import React from 'react';
import TitleHook from '../../Hook/TitleHook';

const Blog = () => {
    TitleHook('Blog')

    return (
        <div className='w-[86%] mx-auto mb-20'>
            <h1 className='text-center text-5xl mt-10 text-red-600 font-semibold capitalize '>some question</h1>

            <div>
                <h2 className='text-3xl capitalize font-semibold mt-10'>2 . What is JWT, and how does it work?</h2>
                <p className='mt-3 text-lg'>JWT is (JSON Web Token) JSON Web Token is an open standard for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider</p>
            </div>
            <div>
                <h2 className='text-3xl capitalize font-semibold mt-10'>1 . Difference between SQL and NoSQL</h2>
                <p className='mt-3 text-lg'>SQL is the programming language used to interface with relational database And NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                <p className='mt-3 text-lg'>SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.</p>
                <p className='mt-3 text-lg'>The dynamic schemata of NoSQL databases allow representation of alternative structures, often alongside each other, encouraging greater flexibility. There is less emphasis on planning, greater freedom when adding new attributes or fields, and the possibility of varied syntax across databases. As a group, however, NoSQL languages lack the standard interface which SQL provides, so more complex queries can be difficult to execute.</p>
            </div>
            <div>
                <h1 className='text-3xl capitalize font-semibold mt-10'>3 . What is the difference between javascript and Node JS?</h1>
                <p className='mt-3 text-lg'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
            </div>
            <div>

                <h1 className='text-3xl capitalize font-semibold mt-10'>4 . How does NodeJS handle multiple requests at the same time?</h1>
                <p className='mt-3 text-lg'> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</p>
            </div>
        </div >
    );
};

export default Blog;