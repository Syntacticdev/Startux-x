import React from 'react'
import PostCard from './PostCard'

function Blog() {
    return (
        <div className='grid sm:grid-cols-2 sm:p-10 rounded-sm sm:border-2 border-white gap-5'>
            <PostCard />
            <PostCard />
        </div>
    )
}

export default Blog