import { useAppDispatch } from '@/hooks';
import Button from '@/ui/Button';
import { increaseItemQuantity, decreaseItemQuantity } from './cartSlice';

type Props = {
  pizzaId: number;
  currentQuantity: number;
};

const UpdateItemQuantity = ({ pizzaId, currentQuantity }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
