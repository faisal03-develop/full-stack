
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
            <p className='text-4xl mb-4 text-(--darkblue)'>{heading}</p>
            <ul>
              {points.map((point, index) => (
                <li key={index} className='my-6 mx-4 text-(--darkblue)'>{point}</li>
              ))}
            </ul>
          </div>
            <div className='flex flex-row items-center mt-10'>
              <div className='border-2 border-(--darkblue) rounded-4xl h-10 w-30 flex justify-center items-center text-(--darkblue)'>{price}</div>
              <button className="bg-(--darkblue) h-10 w-30 rounded-4xl text-white ml-4">Get Started</button>
            </div>
        </div>
    </div>
  )
}
