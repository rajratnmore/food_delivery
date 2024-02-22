import React from 'react';

const Shimmer = () => {
  const shimmerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  return (
    <>
        <div className="shimmerContainer p-10 flex flex-wrap">
          {
            shimmerArray.map( (index) => (
              <div key={index} className="shimmerCard m-5">
                <div className="img w-[250px] h-36 border-2 rounded-lg"></div>
                <div className="content mt-4 ml-2">
                    <h3 className="bg-slate-200 rounded-md mb-2 w-[230px] text-slate-200">shimmer</h3>
                    <h3 className="bg-slate-200 rounded-md mb-2 w-[200px] text-slate-200 h-[14px] text-[12px]">shimmer</h3>
                    <h3 className="bg-slate-200 rounded-md mb-2 w-[170px] text-slate-200 h-[12px] text-[10px]">shimmer</h3>
                </div>
              </div>
            ))
          }            
        </div>
    </>    
  )
}

export default Shimmer;
