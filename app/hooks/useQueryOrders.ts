import { useQuery } from 'react-query';
import http from '../api/axiosCustom';

export type QuerySubcriptions = {
  limit?: number;
  searchKey?: string;
  page?: number;
  status?: string;
};

const useQueryOrders = (defaultFilter: QuerySubcriptions = { limit: 10, page: 1 }) => {
  const { searchKey, status, ...filters } = defaultFilter;
  const query = async (filter) =>
    await http.get(`/api/orders/all?name[regex]=${searchKey || ''}&status[eq]=${status || ''}`, {
      params: filters,
    });

  const {
    data: result,
    isLoading: loading,
    error,
    refetch,
  } = useQuery<any>({
    queryKey: ['useQueryOrders', defaultFilter],
    queryFn: () => query(defaultFilter),
  });

  return {
    refetch,
    data: result?.data?.items || [],
    loading,
    pagination: result?.data?.pagination || {},
    error,
  };
};

export default useQueryOrders;
