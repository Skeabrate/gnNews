import React from 'react';

const NewsDetailsModal = ({}) => {
  return (
    <div className='fixed inset-0 z-50 flex h-full w-full items-center justify-center'>
      <button
        // onClick={}
        className='absolute inset-0 h-full w-full cursor-default bg-gray-600 opacity-30'
      ></button>

      <div className='max-w-screen z-10 mx-4 max-h-screen min-h-[400px] w-full bg-white '>
        <h2>News details</h2>
      </div>
    </div>
  );
};

export default NewsDetailsModal;
