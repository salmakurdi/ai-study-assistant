import Loader from '../../components/common/Loader';
import Card from '../../components/ui/Card';
import { useFetch } from '../../hooks/useFetch';
import { propertyService } from '../../services/propertyService';
import { currency } from '../../utils/helpers';

export default function PropertiesPage() {
  const { data, isLoading, error } = useFetch(() => propertyService.getProperties(), []);
  if (isLoading) return <Loader />;
  if (error) return <p className="text-red-600">{error}</p>;
  if (!data.length) return <p className="text-slate-500">No properties available.</p>;

  return <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{data.map((item)=><Card key={item.id}><img src={item.image} alt={item.title} className="h-40 w-full rounded-lg object-cover"/><h3 className="mt-3 font-semibold">{item.title}</h3><p className="text-sm text-slate-500">{item.location}</p><p className="mt-2 text-blue-700 font-bold">{currency(item.price)}</p><p className="mt-2 text-sm text-slate-600">{item.description}</p></Card>)}</section>;
}
