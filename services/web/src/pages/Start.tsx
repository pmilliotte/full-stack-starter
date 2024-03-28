import { ReactElement } from 'react';

import { Logout } from '~/components';
import { trpc } from '~/utils';

export const Start = (): ReactElement => {
  const { data } = trpc.problemGet.useQuery();
  const goodbye = trpc.problemCreate.useMutation();
  console.log('data');
  if (!data) return <div>Loading...</div>;

  const onClick = () => {
    goodbye.mutate();
  };

  return (
    <div>
      <p>{data}</p>
      <button onClick={onClick}>
        Message is <i>{goodbye.data?.message ?? 'nothing'}</i>
      </button>
      <Logout />
    </div>
  );
};
