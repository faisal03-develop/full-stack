interface ServiceCardProps {
  icon: string;
  title: string;
  features: string[];
  price: string;
  buttonText: string;
}

export default function ServiceCard({ icon, title, features, price, buttonText }: ServiceCardProps) {
  return (
    <div className="bg-slate-800 border border-purple-600 rounded-lg p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-white text-xl font-bold mb-4">{title}</h3>
      
      <div className="mb-4">
        <p className="text-white font-semibold mb-2">Get Started Now</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-300 flex items-center gap-2">
              <span className="text-green-500">✓</span> {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-white text-3xl font-bold mb-6">
        {price}<span className="text-sm text-gray-400">/GST</span>
      </div>

      <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:opacity-90">
        {buttonText} →
      </button>
    </div>
  );
}
