import PatentChecker from '../components/PatentChecker';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold text-center mb-8">专利文本检查工具</h1>
      <PatentChecker />
    </main>
  );
}