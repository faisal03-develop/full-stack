import Sidebar from "@/components/dashboard/sideBar";
import DashboardContent from "@/components/dashboard/dashboardContent";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-(--gray)">
      <Sidebar />
      <DashboardContent />
    </div>
  );
}
