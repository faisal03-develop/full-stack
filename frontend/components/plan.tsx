import React from 'react'

interface PlanProps {
  heading: string;
  points: string[];
  price: string;
}

export default function plan({ heading, points, price }: PlanProps) {
  return (
    <div>
        <div className='bg-white w-124 p-8 mt-20'>
          <div>
            <p className='text-5xl mb-4 text-blue-900'>{heading}</p>
            <ul>
              {points.map((point, index) => (
                <li key={index} className='my-6 mx-4 text-blue-900'>{point}</li>
              ))}
            </ul>
          </div>
            <div className='flex flex-row gap-6 items-center'>
              <div className='border-2 border-purple-600 rounded-4xl h-10 w-30 flex justify-center items-center text-purple-600'>{price}</div>
              <button className="bg-purple-600 h-10 w-30 rounded-4xl text-white ml-6">Get Started</button>
            </div>
        </div>
    </div>
  )
}
