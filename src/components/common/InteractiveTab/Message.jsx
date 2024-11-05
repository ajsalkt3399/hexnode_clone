import React from 'react'

function Message() {
    return (
        <div className=''>
            <div className='fixer top-0 bg-[#2E72F6] text-[18px] py-4 flex items-center text-white mulishbold justify-center'>Messages </div>
            
            <div className='flex flex-col items-center justify-center h-[60vh]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" fill="none" viewBox="0 0 33 32"><path fill="#000" fill-rule="evenodd" d="M27.333 2.667a2.5 2.5 0 0 1 2.5 2.5v23.778c0 1.335-1.613 2.005-2.558 1.063L21.245 24H5.667a2.5 2.5 0 0 1-2.5-2.5V5.167a2.5 2.5 0 0 1 2.5-2.5z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M23 9.667a1 1 0 0 1 0 2H9.667a1 1 0 1 1 0-2zm-6 6.666a1 1 0 1 1 0 2h-6.667a1 1 0 0 1 0-2z" clip-rule="evenodd"></path></svg>
                <h2>No messages</h2>
                <span>Messages from the team will be shown here</span>
            </div>
        </div>
    )
}

export default Message
