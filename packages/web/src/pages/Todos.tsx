import { Loader2 } from 'lucide-react';
import { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { Layout } from '~/components';
import { trpc } from '~/lib';

export const Todos = (): ReactElement => {
  const { data } = trpc.todoList.useQuery();

  if (data?.todos === undefined) {
    return (
      <div className="h-full flex items-center justify-around">
        <Loader2 className="ml-1 h-4 w-4 animate-spin" />
      </div>
    );
  }

  return (
    <Layout>
      <div className="h-full flex items-center justify-around">
        <div>
          <div className="text-md font-semibold">
            <FormattedMessage id="todos.todosList" />
          </div>
          <ul className="list-disc list-inside">
            {data.todos.map(todo => (
              <li key={todo.id}>{todo.content}</li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};
