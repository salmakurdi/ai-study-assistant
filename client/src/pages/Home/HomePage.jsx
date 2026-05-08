import Card from '../../components/ui/Card';

export default function HomePage() {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      <Card><h1 className="text-2xl font-bold">Welcome</h1><p className="mt-2 text-slate-600">Scalable React architecture with service-driven data flow.</p></Card>
      <Card><h2 className="text-xl font-semibold">Highlights</h2><ul className="mt-2 list-disc pl-5 text-slate-600"><li>Dependency injection via service layer</li><li>Protected routing with context</li><li>Reusable UI components</li></ul></Card>
    </section>
  );
}
