// src/components/Footer/Footer.js
import React from 'react';

function Footer({ style }) {
  return (
    <div
      className={`flex justify-between text-[#556575] mulishregular p-[30px_0] sm:p-[20px_0] ${style}`}
    >
      <div className="flex justify-between">
        <div>
          <a href="#" className="hover:text-black">Terms of Use</a>
          <span> - </span>
        </div>
        <div>
          <a href="#" className="hover:text-black">Privacy</a>
          <span> - </span>
        </div>
        <div>
          <a href="#" className="hover:text-black">Cookies</a>
        </div>
      </div>

      <div>Copyright © 2024 Mitsogo Inc. All Rights Reserved.</div>
    </div>
  );
}

export default Footer;
