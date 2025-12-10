import Sidebar from "@/components/dashboard/sidebar";
import DashboardContent from "@/components/dashboard/dashboardcontent";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-(--gray)">
      <Sidebar />
      <DashboardContent />
    </div>
  );
}
