import { lazy } from 'react';

export interface RouteConfig {
  element: React.FC<any>;
  isIndex?: boolean;
  useSuspenseLoader?: boolean;
  path?: string;
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    element: lazy(() => import('@/pages/NegociationParcels')),
    useSuspenseLoader: true,
    isIndex: true,
  },
  {
    path: '/payment-installment',
    element: lazy(() => import('@/pages/PaymentFirstInstallment')),
    useSuspenseLoader: true,
  },
  {
    path: '/register-card',
    element: lazy(() => import('@/pages/RegisterCard')),
    useSuspenseLoader: true,
  },
];
