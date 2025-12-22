import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Chicago, IL",
      rating: 5,
      text: "I couldn't believe how easy it was! They gave me a fair price and picked up my old car the next day. Highly recommend!",
    },
    {
      name: "Michael Brown",
      location: "Aurora, IL",
      rating: 5,
      text: "Fast, professional, and no hassle. Got more money than I expected for my junk car. Will definitely use them again.",
    },
    {
      name: "Jennifer Davis",
      location: "Naperville, IL",
      rating: 5,
      text: "The whole process took less than 48 hours from quote to cash in hand. These guys are the real deal!",
    },
    {
      name: "Robert Wilson",
      location: "Joliet, IL",
      rating: 5,
      text: "My car wasn't running and I thought it was worthless. Cash For Junks proved me wrong! Great service.",
    },
    {
      name: "Lisa Martinez",
      location: "Rockford, IL",
      rating: 5,
      text: "Transparent pricing, friendly staff, and free towing. What more could you ask for? Excellent experience!",
    },
    {
      name: "David Anderson",
      location: "Peoria, IL",
      rating: 5,
      text: "They made selling my old truck so simple. No paperwork headaches, just quick cash. Thank you!",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what thousands of satisfied customers have to say.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}