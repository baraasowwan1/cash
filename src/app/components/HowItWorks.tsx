import { Phone, Truck, DollarSign } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Phone,
      title: "1. Get a Quote",
      description: "Call us or fill out our online form. Provide basic details about your vehicle and get an instant offer.",
    },
    {
      icon: Truck,
      title: "2. Schedule Pickup",
      description: "Choose a convenient time for us to pick up your vehicle. We offer free towing across Illinois and surrounding areas.",
    },
    {
      icon: DollarSign,
      title: "3. Get Paid",
      description: "Sign over the title and receive cash on the spot. It's that simple! Payment within instantly.",
    },
  ];

  return (
    <div id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Selling your junk car has never been easier. Follow these three simple steps and get cash fast.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
