import React from 'react';

const GraphicDigitalProps = (props) => {
  return (
    <>
      <div class="col-sm-12 col-md-6 col-lg-4 portfolioDisplayTopCol-2 mx-auto px-2 pb-2 text-center justify-content-center align-items-center">
        <img src={props.image} alt={props.alt} className="img-fluid" />
        <h5 className="py-2 text-center descriptionTitle"> {props.title} </h5>
        <p className="text-center px-5 pb-5"> {props.description}  </p>

      </div>
    </>
  )
}
export default GraphicDigitalProps;