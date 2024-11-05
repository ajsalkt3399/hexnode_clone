import React, { useEffect, useState } from 'react';
import Message from './InteractiveTab/Message';
import News from './InteractiveTab/News';
import HomeTab from './InteractiveTab/HomeTab';
function InteractiveModal({ isModalOpen }) {
 
  const [activeTab, setActiveTab] = useState('home');


  return (
    <div className={`w-[400px] overflow-hidden no-scroll max-[400px]:w-[90%] h-[80vh] bg-gradient-to-b flex flex-col justify-between  ${activeTab === 'home' ? 'from-[#2E72F6]' : 'from-[#ffffff]'}  from-[#2E72F6] rounded-[25px]  to-white z-50 fixed bottom-[80px] right-[20px]`}>
      <div className='h-[90%] overflow-y-scroll '>
        {activeTab === 'home' ? <HomeTab /> : activeTab === 'messages' ? <Message /> : <News />}
      </div >
      <div className='w-full h-[80px] p-4 bg-white text-[13px] mulishregular rounded-b-[25px] flex justify-around'>
        <div
          className={`cursor-pointer flex flex-col justify-center items-center   ${activeTab === 'home' ? 'text-blue-500' : ''}`}
          onClick={() => setActiveTab('home')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#1A1A1A" stroke-width="1.7" d="M2.85 9.35c0-.423.218-.85.635-1.143l7.496-5.172h.001a1.84 1.84 0 0 1 2.036 0l7.495 5.17.002.002c.417.293.635.72.635 1.142V19.7c0 .73-.676 1.45-1.65 1.45h-15c-.974 0-1.65-.72-1.65-1.45z" class="c39a3af9stroke"></path><path stroke="#1A1A1A" stroke-linecap="round" stroke-width="1.7" d="M17.25 15A7.86 7.86 0 0 1 12 17.002 7.86 7.86 0 0 1 6.75 15" class="c39a3af9stroke"></path></svg>
          Home
        </div>
        <div
          className={`cursor-pointer flex flex-col justify-center items-center  ${activeTab === 'messages' ? 'text-blue-500' : ''}`}
          onClick={() => setActiveTab('messages')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><mask id="d8eda" fill="#fff"><path fill-rule="evenodd" d="M19 2a3 3 0 0 1 3 3v15.806c0 1.335-1.613 2.005-2.559 1.062L15.56 18H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z" clip-rule="evenodd"></path></mask><path fill="#1A1A1A" d="m19.441 21.868 1.2-1.204zM15.56 18v-1.7h.702l.498.496zM20.3 5A1.3 1.3 0 0 0 19 3.7V.3A4.7 4.7 0 0 1 23.7 5zm0 8.956V5h3.4v8.956zm0 2.544v-2.544h3.4V16.5zm0 4.306V16.5h3.4v4.306zm.341-.142a.23.23 0 0 0-.218-.043.23.23 0 0 0-.123.185h3.4c0 2.848-3.441 4.277-5.459 2.267zm-3.882-3.868 3.882 3.868-2.4 2.409-3.882-3.869zM5 16.3h10.559v3.4H5zM3.7 15A1.3 1.3 0 0 0 5 16.3v3.4A4.7 4.7 0 0 1 .3 15zm0-10v10H.3V5zM5 3.7A1.3 1.3 0 0 0 3.7 5H.3A4.7 4.7 0 0 1 5 .3zm14 0H5V.3h14z" class="cd798d3efill" mask="url(#d8eda)"></path><path fill="#1A1A1A" fill-rule="evenodd" d="M17 7a.85.85 0 0 1 0 1.7H7A.85.85 0 1 1 7 7zm-5 4a.85.85 0 0 1 0 1.7H7A.85.85 0 0 1 7 11z" class="cd798d3efill" clip-rule="evenodd"></path></svg>
          Messages
        </div>
        <div
          className={`cursor-pointer flex flex-col justify-center items-center  ${activeTab === 'news' ? 'text-blue-500' : ''}`}
          onClick={() => setActiveTab('news')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#1A1A1A" stroke-linecap="round" stroke-width="1.7" d="M20 4a6.98 6.98 0 0 1 2.101 5c0 1.959-.804 3.73-2.101 5" class="196cb84fstroke"></path><mask id="4399a" fill="#fff"><path fill-rule="evenodd" d="M9.5 14h.718l5.231 3.452A1 1 0 0 0 17 16.617V1.858a1 1 0 0 0-1.55-.835L10.937 4H5a5 5 0 0 0-1.923 9.617l1.967 7.212a2.268 2.268 0 0 0 4.456-.597z" clip-rule="evenodd"></path></mask><path fill="#1A1A1A" d="m10.218 14 .936-1.419-.426-.28h-.51zM9.5 14v-1.7H7.8V14zm5.95 3.452-.937 1.42zm0-16.429-.937-1.419zM10.937 4v1.7h.51l.426-.28zm-7.86 9.617 1.64-.447-.22-.802-.766-.32zm1.966 7.212 1.64-.447zm5.174-8.529H9.5v3.4h.718zm6.168 3.733-5.232-3.452L9.28 15.42l5.232 3.452zm-1.086.584a.7.7 0 0 1 1.085-.584l-1.872 2.838c1.795 1.185 4.187-.103 4.187-2.253zm0-14.759v14.76h3.4V1.858zm1.085.584a.7.7 0 0 1-1.085-.584h3.4c0-2.15-2.392-3.438-4.187-2.254zm-4.51 2.977 4.51-2.977-1.872-2.838-4.511 2.977zM5 5.7h5.938V2.3H5zM1.7 9A3.3 3.3 0 0 1 5 5.7V2.3c-3.7 0-6.7 3-6.7 6.7zm2.032 3.048A3.3 3.3 0 0 1 1.7 9h-3.4a6.7 6.7 0 0 0 4.123 6.186zm2.952 8.334L4.718 13.17l-3.28.895 1.966 7.211zm.548.418a.57.57 0 0 1-.548-.418l-3.28.894A3.97 3.97 0 0 0 7.232 24.2zm.568-.568a.57.57 0 0 1-.568.568v3.4a3.97 3.97 0 0 0 3.968-3.968zM7.8 14v6.232h3.4V14z" class="e610e426fill" mask="url(#4399a)"></path></svg>
          News
        </div>

      </div>


    </div>
  );
}

export default InteractiveModal;
