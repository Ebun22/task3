'use client'
import Skeleton from "react-skeleton";

function ImageSkeleton({ cards }) {
    return  Array(cards)
            .fill(0)
            .map((item, index) => (
                <div className='relative h-64' key={index}>
                    <Skeleton className='w-full h-full' />
                </div>
            ))
        
}

export default ImageSkeleton;