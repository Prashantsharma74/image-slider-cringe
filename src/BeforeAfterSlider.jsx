import React from "react";
import ReactCompareImage from "react-compare-image";

const BeforeAfterSlider = () => {
  return (
    <div className="before-after-wrapper">
      <h2 className="title">Before / After Comparison</h2>
      <div className="slider-container">
        <ReactCompareImage
          leftImage="https://plus.unsplash.com/premium_photo-1746637010097-5e79e6283d99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
          rightImage="https://images.unsplash.com/photo-1747901718105-bf9beb57ba3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
          leftImageLabel="Before"
          rightImageLabel="After"
          sliderLineWidth={3}
          sliderLineColor="#fff"
        />
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
