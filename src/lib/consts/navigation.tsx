import { LayoutDashboard, ListOrdered, Plane, ShoppingBasket, Users } from "lucide-react";
import React from "react";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <LayoutDashboard />,
  },
  {
    key: "products",
    label: "Products",
    path: "/products",
    icon: <ShoppingBasket />,
    submenu: true,
    submenuItems: [
      { key: "products-1", label: "Products-1", path: "/products", icon: <Plane /> },
      { key: "products-2", label: "Products-2", path: "/products-2", icon: <Plane /> },
      { key: "products-3", label: "Products-3", path: "/products-3", icon: <Plane /> },
      { key: "products-4", label: "Products-4", path: "/products-4", icon: <Plane /> },
    ],
  },
  {
    key: "orders",
    label: "Orders",
    path: "/orders",
    icon: <ListOrdered />,
  },
  {
    key: "customers",
    label: "Customers",
    path: "/customers",
    icon: <Users />,
    submenu: true,
    submenuItems: [
      { key: "customers-1", label: "Customers-1", path: "/customers", icon: <Plane /> },
      { key: "customers-2", label: "Customers-2", path: "/customers-2", icon: <Plane /> },
      { key: "customers-3", label: "Customers-3", path: "/customers-3", icon: <Plane /> },
      { key: "customers-4", label: "Customers-4", path: "/customers-4", icon: <Plane /> },
    ],
  },
];
