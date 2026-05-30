import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Dashboard } from '@/features/dashboard/components/Dashboard';
import { MainLayout } from '@/features/dashboard/layouts/MainLayout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutos
      gcTime: 1000 * 60 * 10, // 10 minutos
      retry: 2,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </QueryClientProvider>
  );
}

export default App;
