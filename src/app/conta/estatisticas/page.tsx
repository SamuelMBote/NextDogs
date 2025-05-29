import statsGet from '@/actions/stats-get';
import dynamic from 'next/dynamic';
import React from 'react';
const UserStatsGraphs = dynamic(
  () => import('@/components/conta-estatisticas'),
  {
    loading: () => <p>Carregando...</p>,
  },
);
const PageEstatisticas = async () => {
  const { data } = await statsGet();
  if (!data) return null;
  return (
    <section>
      <h1>Estatísticas</h1>
      <UserStatsGraphs data={data} />
    </section>
  );
};

export default PageEstatisticas;
