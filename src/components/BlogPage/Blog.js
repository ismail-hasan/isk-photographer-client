import React from 'react';
import TitleHook from '../../Hook/TitleHook';

const Blog = () => {
    TitleHook('Blog')

    return (
        <div>
            <h1 className='text-center text-5xl text-red-600 font-semibold capitalize '>some question</h1>
        </div>
    );
};

export default Blog;