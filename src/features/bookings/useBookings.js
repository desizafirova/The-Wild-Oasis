import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';

export function useBookings() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get('status');
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue };
  // : { field: 'totalPrice', value: 5000, method: 'gte' };
  /*  If I need to have a multiple filters at the same time -> Instead of passing in just one object I need to pass an array of objects and in the apiBooking file I have to loop over that object and for each of them I should add a new query to the query variable */
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ['bookings', filter],
    queryFn: () => getBookings({ filter }),
  });

  return { isLoading, bookings, error };
}
