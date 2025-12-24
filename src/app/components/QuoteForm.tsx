import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

/* 🔴 بيانات EmailJS */
const SERVICE_ID = "service_7zi5cwj";
const TEMPLATE_ID = "template_9ojidxt";
const PUBLIC_KEY = "tuxnMckFeTSqgEq6X";

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    year: "",
    make: "",
    model: "",
    condition: "",
    zipCode: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          year: formData.year,
          make: formData.make,
          model: formData.model,
          condition: formData.condition,
          zipCode: formData.zipCode,
          description: formData.description,
        },
        PUBLIC_KEY
      )
      .then(() => {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: "",
            phone: "",
            email: "",
            year: "",
            make: "",
            model: "",
            condition: "",
            zipCode: "",
            description: "",
          });
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
        alert("حدث خطأ أثناء إرسال الطلب");
      });
  };

  return (
    <div id="quote-form" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Get Your Free Quote</h2>
          <p className="text-gray-600">
            Fill out the form below and we'll get back to you with an offer within minutes!
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Vehicle Information</CardTitle>
            <CardDescription>
              Tell us about your vehicle to get an accurate quote
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-green-600 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  We've received your request. Our team will contact you shortly with a quote.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Full Name *</Label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone Number *</Label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Email Address *</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <Input placeholder="Year" value={formData.year} onChange={(e) => setFormData({ ...formData, year: e.target.value })} required />
                  <Input placeholder="Make" value={formData.make} onChange={(e) => setFormData({ ...formData, make: e.target.value })} required />
                  <Input placeholder="Model" value={formData.model} onChange={(e) => setFormData({ ...formData, model: e.target.value })} required />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Select value={formData.condition} onValueChange={(value) => setFormData({ ...formData, condition: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="running">Running</SelectItem>
                      <SelectItem value="not-running">Not Running</SelectItem>
                      <SelectItem value="damaged">Damaged</SelectItem>
                      <SelectItem value="totaled">Totaled</SelectItem>
                    </SelectContent>
                  </Select>

                  <Input
                    placeholder="ZIP Code"
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    required
                  />
                </div>

                <Textarea
                  placeholder="Additional details"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  Get My Free Quote
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
