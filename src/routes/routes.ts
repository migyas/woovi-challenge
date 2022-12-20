import { lazy } from "react";

export interface RouteConfig {
  element: React.FC<any>;
  isIndex?: boolean;
  useSuspenseLoader?: boolean;
  path?: string;
}

export const routes: RouteConfig[] = [
  {
    path: "/",
    element: lazy(() => import("@/pages/NegociationParcels")),
    useSuspenseLoader: true,
    isIndex: true,
  },
  {
    path: "/payment-parcel",
    element: lazy(() => import("@/pages/PaymentFirstParcel")),
    useSuspenseLoader: true,
  },
  {
    path: "/register-card",
    element: lazy(() => import("@/pages/RegisterCard")),
    useSuspenseLoader: true,
  },
];
