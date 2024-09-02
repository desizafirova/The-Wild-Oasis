import { useQueryClient, useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteBooking as deleteBookingApi } from '../../services/apiBookings';

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),
    onSuccess: () => {
      toast.success('Booking has been deleted successfully!');
      queryClient.invalidateQueries({
        queryKey: ['bookings'],
      });
    },
    onError: () => toast.error('This booking could not be deleted!'),
  });

  return { isDeleting, deleteBooking };
}
