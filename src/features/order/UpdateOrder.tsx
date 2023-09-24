import { updateOrder } from '@/services/apiRestaurant';
import { Order } from '@/types';
import Button from '@/ui/Button';
import { Params, useFetcher } from 'react-router-dom';

type Props = {
  order: Order;
};

const UpdateOrder = ({ order }: Props) => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
      <input type="hidden" name="priority" value={JSON.stringify(order)} />
    </fetcher.Form>
  );
};

export default UpdateOrder;

export async function action({
  // request,
  params,
}: {
  // request: Request;
  params: Params<string>;
}) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
