import React from 'react'
import './style.css'
import CommentCard from './CommentCard'
const PostCard = () => {
    return (
        <>
            <div className='postCard container'>
                This is the post card component
            </div>
            <CommentCard/>
        </>
    )
}

export default PostCard;