import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {

    return (
    
    <Link to={`${id}`}>
        <div className='w-full bg-slate-200 p-4'>
            <div className='w-full justify-center mb-3'>
                <img src={appwriteService.getFilePreview
                    (featuredImage)
                } alt={title}
                className='roumded-xl'/>

            </div>
            <h2 className='text-xl font-bold'>{title}</h2>

        </div>
    </Link>  
    
  )
}

export default PostCard
