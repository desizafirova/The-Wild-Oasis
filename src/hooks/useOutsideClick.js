import { useEffect, useRef } from 'react';

export function useOutsideClick(handler, listenCaputuring = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }

      document.addEventListener('click', handleClick, listenCaputuring);

      return () =>
        document.removeEventListener('click', handleClick, listenCaputuring);
    },
    [handler, listenCaputuring]
  );

  return ref;
}
