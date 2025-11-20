'use client';

import React from 'react';
import App from './App';

export default function Alex40Page() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;500;600;700&display=swap');

        body {
          font-family: 'Pixelify Sans', sans-serif;
          background-color: #111;
          color: white;
          overflow: hidden;
        }
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <App />
    </>
  );
}
