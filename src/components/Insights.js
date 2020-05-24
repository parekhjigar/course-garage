import React from 'react';
import Background from '../img/Background-visualization.jpg';

const Visualization = () => {
  return (
    <div className="container">


    <img src={Background} alt="Background" height = "700" width = "100%"/>

      <br/>
      
      <img src="https://demoappayaz.s3.amazonaws.com/plot1.png" alt="Visualization-2" height = "500" width = "1000" />
      
      <br/>
      
      <img src="https://demoappayaz.s3.amazonaws.com/Plot2.png" alt="Visualization-3" height = "500" width = "1000" />

      <br/>
      
      <img src="https://demoappayaz.s3.amazonaws.com/plot3.png" alt="Visualization-4" height = "500" width = "1000" />

      <br/>
      
      <img src="https://demoappayaz.s3.amazonaws.com/plot4.png" alt="Visualization-5" height = "500" width = "1000" />

      <br/>
      
      <img src="https://demoappayaz.s3.amazonaws.com/plot5.png" alt="Visualization-6" height = "500" width = "1000" />
 
    </div>
  );
};


export default Visualization;



