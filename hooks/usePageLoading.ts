import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';

export const usePageLoading = (): void => {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (): void => {
      NProgress.start();
    };
    const handleStop = (): void => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);
};
