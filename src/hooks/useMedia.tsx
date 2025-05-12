import React from 'react';

const useMedia = (media: string) => {
  const [match, setMatch] = React.useState<boolean>(false);

  React.useEffect(() => {
    function changeMatch(): void {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changeMatch();
    window.addEventListener('resize', changeMatch);
    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [media]);
  return match;
};

export default useMedia;
