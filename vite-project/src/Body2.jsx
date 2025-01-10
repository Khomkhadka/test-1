import React from 'react'

function Body2() {
  return (
    <>
    <div className=' flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-white text-black'>
      <div>
      <h2 className="text-xl font-bold text-gray-900">
        Committed to Quality and Sustainable Practices
      </h2>
      <p className="text-gray-700">
        At our company, we prioritize exceptional quality in every sheet of paper
        we produce. Our commitment to sustainability ensures that our products
        are environmentally friendly and responsibly sourced.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div>
        Every product undergoes rigorous testing to ensure it meets our high standards.
        </div>
        <div>
        Every product undergoes rigorous testing to ensure it meets our high standards.
        </div>
      </div>
      </div>
      <div className="bg-[url('./assets.image.png')] h-8 w -9"></div>
      </div>
    </>
  )
}

export default Body2
