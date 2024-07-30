import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpLink } from '@trpc/client';
import { ReactElement, useState } from 'react';
import { IntlProvider } from 'react-intl';

import { Toaster } from './components/ui';
import { frenchMessages, SESSION_TOKEN_NAME, trpc } from './lib';
import { AppRoutes } from './navigation';

export const App = (): ReactElement => {
  const [queryClient] = useState(() => new QueryClient());

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpLink({
          url: `${import.meta.env.VITE_APP_API_URL}`,
          headers: () => {
            const sessionToken = localStorage.getItem(SESSION_TOKEN_NAME);

            if (sessionToken === null) {
              return {};
            }

            return {
              Authorization: `Bearer ${sessionToken}`,
            };
          },
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <IntlProvider messages={frenchMessages} locale="fr" defaultLocale="fr">
          <AppRoutes />
          <Toaster />
        </IntlProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
};
