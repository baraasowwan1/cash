import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What types of vehicles do you buy?",
      answer: "We buy all types of vehicles including cars, trucks, vans, SUVs, and motorcycles. We accept vehicles in any condition - running, not running, damaged, or totaled.",
    },
    {
      question: "How quickly can I get paid?",
      answer: "Once we pick up your vehicle and you sign over the title, you'll receive payment immediately. In most cases, the entire process from quote to cash takes 24-48 hours.",
    },
    {
      question: "Do I need a title to sell my junk car?",
      answer: "Yes, in most cases you'll need a clear title to sell your vehicle. However, we can work with you if you've lost your title. Contact us to discuss your specific situation.",
    },
    {
      question: "Is towing really free?",
      answer: "Yes! We provide completely free towing service anywhere in the United States. There are no hidden fees or charges - the quote you receive is the exact amount you'll get paid.",
    },
    {
      question: "What areas do you service?",
      answer: "We primarily serve Illinois and surrounding states. Whether you're in Chicago, Aurora, Naperville, Joliet, or any other Illinois city, we can pick up your vehicle. Contact us to confirm service in your area.",
    },
    {
      question: "What information do I need to provide for a quote?",
      answer: "We'll need basic information about your vehicle including the year, make, model, condition, mileage, and your ZIP code. This helps us provide an accurate quote.",
    },
    {
      question: "Can I sell a car that doesn't run?",
      answer: "Absolutely! We specialize in buying junk cars that don't run. Non-running vehicles are still valuable for parts and scrap metal.",
    },
    {
      question: "Will you buy my car if it's been in an accident?",
      answer: "Yes, we buy vehicles that have been in accidents, including those with frame damage, flood damage, or that have been totaled by insurance companies.",
    },
  ];

  return (
    <div id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Have questions? We've got answers. Check out our most commonly asked questions below.
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg px-6 border shadow-sm"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}