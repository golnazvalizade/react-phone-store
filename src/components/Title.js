import React from 'react';

const Title = ({ name, title }) => {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-title mb-5">
        <h1 className="text-uppercase font-weigth-bold">
          {name} <strong>{title}</strong>
        </h1>
      </div>
    </div>
  );
};

export default Title;
