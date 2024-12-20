import React from 'react'

const NewsCard = (props) => {
  return (
    <div className="max-w-2xl mx-auto my-3">
        <div className="lg:flex lg:gap-5 bg-white border border-gray-300  rounded-xl overflow-hidden items-center p-4 lg:px-5">
            <div className="relative flex flex-shrink-0 items-center">
                <h1 className="text-2xl">{props.date}</h1>
            </div>
            <div className="flex flex-col lg:py-3">
                <p className="text-xl font-bold mb-1">{props.title}</p>
                <p className="text-gray-500 mb-0">
                    {props.content}
                </p>
            </div>
        </div>
    </div>
  )
}

export default NewsCard
