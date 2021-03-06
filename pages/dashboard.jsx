import useSWR from "swr";
import EmptyState from "@/components/EmptyState";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import DashboardShell from "@/components/DashboardShell";
import { useAuth } from "@/lib/auth";
import fetcher from "utils/fetcher";
import Error from "@/components/Error";
import SiteTable from "@/components/SiteTable";
import SiteTableHeader from "@/components/SiteTableHeader";

export default function Dashboard() {
  const auth = useAuth();
  const { data, error } = useSWR(
    auth.user ? ["/api/sites", auth.user.token] : null,
    fetcher
  );

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  if (error) return <Error error={error} />;

  return (
    <DashboardShell>
      <SiteTableHeader />
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  );
}
