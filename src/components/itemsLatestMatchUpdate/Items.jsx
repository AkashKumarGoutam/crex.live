import React from 'react'
import '../itemsLatestMatchUpdate/Items.css'

function Items() {
  return (
    <div className='p-4'>
       <h1 className='font-bold text-2xl py-6'> Shami's replacement for GT</h1>
   
    <div className='flex gap-6 w-[100%]'>
        <div className='img-container rounded-lg'>
            <img src='https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1710238519846_GIdAPRfWAAAxJdq.jpeg' alt='img' className='img-zoom rounded-lg ' style={{width:"600px" ,height:"300px"}}/>
        </div>
        <div className='w-[50%] py-10'>
            <div className='flex gap-4'>
                <a href='/'>MOHAMMED SHAMI</a>
                <a href='/'>ISHAN POREL</a>
                <a href='/'>KAMLESH NAGARKOTI</a>
                <a href='/'>VARUN AARON</a>
            </div>
            <div>
                <h1 className='py-2 text-2xl font-bold'>Mohammed Shami Ruled Out Of IPL 2024 ; Here Are Three Potential Replacements</h1>
                <h1 className='py-2 '>With Mohammmed Shami ruled out of the IPL , Gujarat Titans face the absence of their  wickets-taker in the power play la...</h1>
                <h1 className='py-2 '>14 minutes age</h1>
            </div>
        </div>
    </div><br/><br/> <hr/>
    </div>
  )
}

export default Items
