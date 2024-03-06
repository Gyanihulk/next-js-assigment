import Dashboard from "@/components/Dashboard/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Page - Akhil System pvt limited",
  description: "This is Login page for Akhil System pvt limited",
  // other metadata
};

const DashboardPage = () => {
  return (
    <>
      <Dashboard />
    </>
  );
};

export default DashboardPage;
