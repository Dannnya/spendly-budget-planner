import { createBrowserRouter } from 'react-router';
import { AppLayout } from '@/shared/layout/AppLayout';
import { Dashboard } from '@/pages/Dashboard';
import { TransactionsPage } from '@/pages/TransactionsPage';
import { AnalyticsPage } from '@/pages/AnalyticsPage';
import { BudgetsPage } from '@/pages/BudgetsPage';
import { SettingsPage } from '@/pages/SettingsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'transactions', element: <TransactionsPage /> },
      { path: 'analytics', element: <AnalyticsPage /> },
      { path: 'budgets', element: <BudgetsPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
]);