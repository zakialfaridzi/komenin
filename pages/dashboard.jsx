import useSWR from "swr";
import EmptyState from "@/components/EmptyState";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import DashboardShell from "@/components/DashboardShell";
import { useAuth } from "@/lib/auth";
import fetcher from "utils/fetcher";
import Error from "@/components/Error";
import SiteTable from "@/components/SiteTable";

export default function Dashboard() {
  const auth = useAuth();
  const { data, error } = useSWR("/api/sites", fetcher);

  console.log(data);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  if (error) return <Error error={error} />;

  return (
    <DashboardShell>
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  );
}
