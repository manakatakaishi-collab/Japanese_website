import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="py-40 text-center px-6">
      <h1 className="text-4xl font-black text-slate-900 mb-6">404 - Page Not Found</h1>
      <p className="text-slate-600 mb-8">The page you are looking for does not exist.</p>
      <Link href="/" className="inline-block bg-primary text-white px-8 py-4 font-black uppercase tracking-widest">
        Back to Home
      </Link>
    </div>
  );
}
