import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export function useCars() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['useCars'],
    queryFn: () => api.get('/api/useCars')
  })

  return {
    isLoading,
    error,
    data: data?.data
  }
}