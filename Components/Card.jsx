import React from 'react'

const Card = ({allCampaign, setOpenModal, setDonate, title}) => {
  console.log("card : ", allCampaign)

  const daysLeft = (deadline) => {
    const difference = new Date(deadline).getTime() - Date.now();
    const remainingDays = difference / (1000*3600*24)
    return remainingDays.toFixed(0) 
  }

  // Add a loading state or handle undefined data
  if (!allCampaign) {
    return (
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10'>
        <p className='py-16 text-2xl font-bold leading-5 text-center'>{title}</p>
        <div className='flex justify-center'>
          <p>Loading campaigns...</p>
        </div>
      </div>
    )
  }

  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10'>
      <p className='py-16 text-2xl font-bold leading-5 text-center'>{title}</p>
      <div className='grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:max-auto lg:max-w-full'>
      {allCampaign.length > 0 ? (
        allCampaign.map((campaign, i) => (
          <div 
            onClick={() => (setDonate(campaign), setOpenModal(true))}
            key={i+1}
            className='cursor-pointer p-4 overflow-hidden transition-shadow duration-300 bg-black text-white border-4 border-gray-300 rounded-xl hover:shadow-2xl'
          >
            <img 
              src='https://random.imagecdn.app/300/300'
              className='object-cover w-full h-64 border-2 border-gray-700 rounded-xl'
              alt=''
            />

            <div className='py-5 pl-2'>
              <p className='mb-2 text-xs font-semibold text-white uppercase'>
                Days Left: {daysLeft(campaign.deadline)}
              </p>
              <a
                href='/'
                aria-label='Article'
                className='inline-block mb-3 text-gray-50 transition-colors duration-200 hover:text-deep-purple-accent-700'
              >
                <p className='text-2xl font-bold leading-5'>{campaign.title}</p>
              </a>

              <p className='mb-4 text-gray-200'>{campaign.description}</p>  
              <div className='flex space-x-4'>
                <p className='font-semibold'>Target: {campaign.target} ETH</p>
                <p className='font-semibold'>
                  Raised: {campaign.amountCollected ? campaign.amountCollected : '0'} ETH
                </p>
              </div>          
            </div>
          </div>
        ))
      ) : (
        <div className='col-span-3 text-center'>
          <p>No campaigns found</p>
        </div>
      )}
      </div>
    </div> 
  )
}

export default Card