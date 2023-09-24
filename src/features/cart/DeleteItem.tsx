import { useAppDispatch } from '@/hooks';
import Button from '@/ui/Button';
import { deleteItem } from './cartSlice';

const DeleteItem = ({ pizzaId }: { pizzaId: number }) => {
  const dispatch = useAppDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
};

export default DeleteItem;
