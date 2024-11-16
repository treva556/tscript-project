import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            HERO
      </header>
      <div className=' mt-4 h-10'>
        <p className=' underline'> About  </p>
      </div>
      <div className='grid grid-cols-3 mt-4 m-8  gap-5'>
      <div className=' bg-blue-200 rounded-lg p-6'>
        AAA
      </div>
      <div className=' border border-blue-900 bg-blue-200 rounded-lg p-6'>
        AAA
      </div>
      <div className=' bg-blue-200 rounded-lg p-6'>
        AAA
      </div>
      </div>

      <div className='grid grid-cols-2 mt-4  gap-5'>
      <div className=' bg-blue-500 rounded-lg p-6'>
        AAA
      </div>
      <div className=' bg-blue-200 rounded-lg p-6'>
        AAA
      </div>
     
      </div>

      {/* footer */}
      <div className='border border-black mt-2' >

     footer
      <div className='grid grid-cols-3  '>
        
      <div className=' p-6'>
        AAA
      </div>
      <div className=' p-6'>
        AAA
      </div>

      </div>
      </div>
    </div>
  );
}

export default App;
