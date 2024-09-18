import React from 'react'

const ExerciseVideos = ({youtubeVideo, name}) => {
  return (
    <div className=" p-6">
      <h1 className='text-2xl font-semibold'>Watch <span className="text-red-600 capitalize">{name}</span> exercise videos</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-4'>
        {youtubeVideo?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video flex flex-col items-center p-4  rounded-md "
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img  src={item.video.thumbnails[0].url} alt={item.video.title} className='rounded-md  mb-2'/>
            <div className="text-center">
              <p className="text-base font-semibold text-gray-800">
                {item.video.title}
              </p>
              <p className="text-sm text-gray-600">
                {item.video.channelName}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default ExerciseVideos