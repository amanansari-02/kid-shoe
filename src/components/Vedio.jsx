import * as React from 'react';

function Vedio_com() {
  return (
    <div className="flex justify-center items-center h-screen">
      <video width="600" controls>
        <source src="/components/Gif_for_react.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Vedio_com;
