import React from 'react';

const PageIdFoto = ({ params: { id } }: { params: { id: number } }) => {
  return (
    <div>
      <h1>Foto id: {id}</h1>
    </div>
  );
};

export default PageIdFoto;
