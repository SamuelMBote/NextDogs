import React from 'react';

const PageUser = ({ params: { user } }: { params: { user: string } }) => {
  return (
    <div>
      <h1>Usuário: {user}</h1>
    </div>
  );
};

export default PageUser;
