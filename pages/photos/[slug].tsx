import { useRouter } from 'next/router'
import React from 'react'

const PhotoDetail = () => {
    const router = useRouter()
    console.log(router.query.slug)
    return (
        <div>
        </div>
    )
}

export default PhotoDetail