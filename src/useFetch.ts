import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

interface UseFetchResult<T> {
  data: T | undefined;
  error: Error | null;
  refetch: () => void;
  isLoading: boolean;
}

const useFetch = <T>(url: string, key: string): UseFetchResult<T> => {
  const { data, error, refetch, isLoading } = useQuery<T, Error>({
    queryKey: [key],
    queryFn: async () => {
      const res = await Axios.get(url);
      return res.data as T;
    },
  });
  if (error) {
    console.log(error);
  }

  return { data, error, refetch, isLoading };
};

export default useFetch;
