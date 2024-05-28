import { useQuery } from '@tanstack/react-query';

const useUserData = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await fetch(
        'https://coffee-store-server-pi-three.vercel.app/users'
      );
      const data = await res.json();
      return data;
    },
  });
  return { data, isLoading, refetch };
};

export default useUserData;
