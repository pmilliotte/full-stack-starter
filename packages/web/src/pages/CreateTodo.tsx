import { ReactElement, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Button, Layout, Textarea } from '~/components';
import { trpc, useIntl } from '~/lib';

export const CreateTodo = (): ReactElement => {
  const t = useIntl();
  const { mutate, isPending } = trpc.todoCreate.useMutation({
    onSuccess: () => setContent(''),
  });
  const [content, setContent] = useState('');

  return (
    <Layout>
      <div className="h-full flex items-center justify-around">
        <div className="flex flex-col gap-2">
          <Textarea
            className="p-4 min-w-[300px]"
            placeholder={t.formatMessage({ id: 'createTodo.content' })}
            value={content}
            onChange={e => setContent(e.currentTarget.value)}
          />
          <div className="flex items-center justify-end">
            <Button
              onClick={() => mutate({ content })}
              disabled={content === '' || isPending}
            >
              <FormattedMessage id="createTodo.create" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
