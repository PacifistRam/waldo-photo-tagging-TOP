import { useState } from "react";

const TestApp = () => {
  const [pixel, setPixel] = useState({
    xPixel: 0,
    yPixel: 0,
    xPercentage: 0,
    yPercentage: 0,
  });
  const [ matchFound, setMatchFound ] = useState(false)
  const matchPixel = {
    xMatchPixelPer: 9,
    yMatchPixelPer: 49
  }
  const approxValue = 4
  const clickedPixel = (e) => {
    const img = e.currentTarget;
    const rect = img.getBoundingClientRect();
    const xClicked = e.clientX - rect.left;
    const yClicked = e.clientY - rect.top;
    // converting positions to percentages
    const width = rect.width;
    const height = rect.height;
    const xPercent = (xClicked / width) * 100;
    const yPercent = (yClicked / height) * 100;

    // match with given coordinates
    // const xMatchRange = (matchPixel.xMatchPixel / width) *100;
    // const yMatchRange = (matchPixel.yMatchPixel / height) * 100;
    const xMatchPer = matchPixel.xMatchPixelPer;
    const yMatchPer = matchPixel.yMatchPixelPer;
   
    // matching with 1% difference
    const xMatch = Math.abs(Math.round(xPercent) - xMatchPer) <= approxValue;
    const yMatch = Math.abs(Math.round(yPercent) - yMatchPer) <= approxValue;
    
    setPixel({
      xPixel: xClicked,
      yPixel: yClicked,
      xPercentage: xPercent,
      yPercentage: yPercent,
    });
    setMatchFound(xMatch && yMatch);
    
    
    // direct pixel match
    // const xDiff = Math.abs(xClicked - matchPixel.xMatchPixel);
    // const yDiff = Math.abs(yClicked - matchPixel.yMatchPixel);
    
    
  };
  return (
    <div className="grid grid-cols-1 gap-3 px-4">
      <div className="relative max-w-[1185px] cursor-pointer">
          <img
            src="../assets/images/aquatic-aquarium.webp"
            alt=""
            onClick={clickedPixel}
          />
            {
                pixel.xPercentage !== 0 || pixel.yPercentage !== 0 ? (
                <div 
                
                style={
                    {
                        position: "absolute",
                        top: `${pixel.yPercentage}%`,
                        left: `${pixel.xPercentage}%`,
                        transform: "translate(-50%, -50%)",
                        width: "64px",
                        height: "64px",
                        pointerEvents: "none",
                        border:`2px solid ${matchFound ? 'green' : 'red'}`,
                        backgroundColor: matchFound? `rgba(0, 255, 0, 0.3)` : `rgba(255,0,0,0.3)`
                    }
                }>
    
              </div>
                ) : null

            }
            
          
         
      </div>
      <div className="border border-double px-4 py-2 ">
        <p>
          <span>xPosition: {pixel.xPixel}</span>,{" "}
          <span>xPercent: {pixel.xPercentage}</span>
        </p>
        <p>
          <span>yPosition: {pixel.yPixel}</span>,{" "}
          <span>yPercent: {pixel.yPercentage}</span>
        </p>
      </div>
    </div>
  );
};

export default TestApp;
