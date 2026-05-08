export default function Card({ children, className = '' }) {
  return <article className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm ${className}`}>{children}</article>;
}
