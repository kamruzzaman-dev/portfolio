import React from 'react';
import { Typewriter, useTypewriter } from 'react-simple-typewriter'


const Blog = () => {
    const { text } = useTypewriter({
        words: [' Comming Soon. . .'],
        loop: 0,
        onLoopDone: () => console.log(`loop completed after 3 runs.`),
    })
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <h1 className='text-6xl'> 
            {text}
            </h1>
        </div>
    );
};

export default Blog;