import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { ReactElement, useState } from 'react';

import './App.css';
import { AppRoutes, Session } from './navigation';
import { trpc } from './utils/trpc';

const App = (): ReactElement => {
  const [queryClient] = useState(() => new QueryClient());

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${import.meta.env.VITE_APP_API_URL}`,
          headers: () => {
            const sessionToken = localStorage.getItem('session');

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
        <Session>
          <AppRoutes />
        </Session>
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default App;
