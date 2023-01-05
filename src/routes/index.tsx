import { Routes as Switch, Route } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('@/components/Layout'));
const RegisterCard = lazy(() => import('@/pages/RegisterCard'));
const NotFound = lazy(() => import('@/pages/404'));
const NegociationInstallments = lazy(
  () => import('@/pages/NegociationInstallments'),
);
const PaymentFirstInstallment = lazy(
  () => import('@/pages/PaymentFirstInstallment'),
);

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Layout />}>
        <Route index element={<NegociationInstallments />} />
        <Route
          path="payment-installment"
          element={<PaymentFirstInstallment />}
        />
        <Route path="register-card" element={<RegisterCard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Switch>
  );
}
