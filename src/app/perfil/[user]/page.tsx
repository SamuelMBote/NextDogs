import photosGet from '@/actions/photos-get';
import Feed from '@/components/feed';
import React from 'react';

const PagePerfilUser = async ({
  params,
}: {
  params: Promise<{ user: string }>;
}) => {
  const { user } = await params;
  const { data } = await photosGet({ user });
  if (!data) return null;
  return (
    <section className="container mainSection">
      <h1 className="title"> {user}</h1>
      <Feed photos={data} user={user} />
    </section>
  );
};

export default PagePerfilUser;
