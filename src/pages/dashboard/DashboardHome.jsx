import DashboardRecentEcoSpacesAndAppointments from "../../components/dashboard/DashboardRecentEcoSpacesAndAppointments";
import DashboardStatisticsCard from "../../components/dashboard/DashboardStatisticsCard";

const DashboardHome = () => {
  return (
    <section className="space-y-5">
      <DashboardStatisticsCard />
      <DashboardRecentEcoSpacesAndAppointments />
    </section>
  );
};

export default DashboardHome;
