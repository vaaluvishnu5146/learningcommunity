import React from "react";
import AdminLayout from "../Layouts/AdminLayout";
import { Outlet, Route, Routes } from "react-router-dom";

export default function index() {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
}
