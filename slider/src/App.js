import React, { useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import {RxDotFilled} from 'react-icons/rx'

function App() {

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1602615576820-ea14cf3e476a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Flowers'
    },
    {
      url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Tulips'
    },
    {
      url: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3ByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name:'Valley'
    },

    {
      url: 'https://images.unsplash.com/photo-1584963237901-8ff959b9b4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM1fHxzcHJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      name: 'Yellow Flowers'
    },
    {
      url: 'https://images.unsplash.com/photo-1577862236121-c237c73ef4ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Spring'
    },
  ];

  const[currentImage, setCurrentImage] = useState(0)

  function prevImage() {
   if(currentImage === 0) {
    setCurrentImage(images.length - 1)
   }else{
    setCurrentImage(currentImage - 1)
   }
  }

  function nextImage() {
   if(currentImage === images.length - 1) {
    setCurrentImage(0)
   }else{
    setCurrentImage(currentImage + 1)
   }
  }

  useEffect(() => {
    let imageInterval = setInterval(() => {
      nextImage()
    },4000)
    return () => clearInterval(imageInterval)
  },[currentImage])

  return (
    <div className=" w-[100%] h-[100vh] flex flex-col justify-center items-center bg-slate-300">
     <h1 className='text-white m-5 text-4xl font-medium [text-shadow:_0_2px_0_darkgray]'>Spring Gallery</h1>
     <div className="w-[90%] h-[auto] md:w-[80%] lg:w-[60%]">
      <img className="w-[100%] h-[auto] " src={images[currentImage].url} alt="" />
     </div>

     <div className='flex'>
      {images.map((image,index) => (
         <div  key={index}>
          <RxDotFilled 
            onClick={() => setCurrentImage(index)}
            className="text-white hover:text-slate-500 text-2xl my-2 "
         />
         </div> 
      )
      )}
     </div>
 
     <div className='flex justify-between w-[70%] lg:w-[50%] '>
      <div className='p-3 ' type='button' onClick={prevImage}>
         <FiChevronLeft className='text-4xl text-white hover:text-slate-500'/>
      </div>
      <div className='w-[200px] text-center h-6 '>
        <p className='text-white m-4 text-2xl [text-shadow:_0_1px_0_darkgray] '>{images[currentImage].name}</p>
      </div>
      <div className='p-3 ' type='button' onClick={nextImage}>
        <FiChevronRight className='text-4xl text-white hover:text-slate-500' /></div>
      </div>

    </div>
  );
}

export default App;
