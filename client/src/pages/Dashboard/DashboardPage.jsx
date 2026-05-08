import Card from '../../components/ui/Card';
import Loader from '../../components/common/Loader';
import { useFetch } from '../../hooks/useFetch';
import { propertyService } from '../../services/propertyService';

export default function DashboardPage() {
  const { data, isLoading, error } = useFetch(() => propertyService.getProperties(), []);

  if (isLoading) return <Loader />;
  if (error) return <p className="text-red-600">{error}</p>;

  return <section className="space-y-4"><h1 className="text-2xl font-bold">Dashboard</h1><div className="grid gap-4 md:grid-cols-3"><Card><p className="text-sm text-slate-500">Total properties</p><p className="text-2xl font-bold">{data.length}</p></Card><Card><p className="text-sm text-slate-500">Avg. price</p><p className="text-2xl font-bold">${Math.round(data.reduce((s,p)=>s+p.price,0)/Math.max(data.length,1))}</p></Card><Card><p className="text-sm text-slate-500">Status</p><p className="text-2xl font-bold text-emerald-600">Healthy</p></Card></div></section>;
}
