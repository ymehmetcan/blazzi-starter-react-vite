import React from 'react';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  // eslint-disable-next-line no-unused-vars
  interface Register {
    router: typeof router;
  }
}

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
