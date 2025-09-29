interface StatCardProps {
  number: string;
  label: string;
  description: string;
}

export default function StatCard({ number, label, description }: StatCardProps) {
  return (
    <div className="bg-white text-black p-6 rounded-lg border-2 border-gray-300 hover:border-black transition-all duration-300">
      <div className="text-3xl font-bold mb-2">{number}</div>
      <div className="text-lg font-semibold mb-2">{label}</div>
      <div className="text-gray-600 text-sm">{description}</div>
    </div>
  );
}