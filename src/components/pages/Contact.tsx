import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, Send, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { validateForm, commonRules, sanitize, rateLimiter } from '../../utils/security';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredContact: 'email',
    bestTime: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check
    if (!rateLimiter.isAllowed('contact-form', 3, 60000)) {
      setErrors({ general: 'Too many attempts. Please wait a minute before trying again.' });
      return;
    }
    
    // Validate form
    const validationRules = {
      name: [commonRules.required(), commonRules.name(), commonRules.minLength(2)],
      email: [commonRules.required(), commonRules.email()],
      phone: [commonRules.required(), commonRules.phone()],
      service: [commonRules.required()],
      message: [commonRules.required(), commonRules.minLength(10), commonRules.maxLength(1000)]
    };
    
    const validation = validateForm(formData, validationRules);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    
    setErrors({});
    setIsSubmitting(true);
    
    // Sanitize form data
    const sanitizedData = {
      name: sanitize.text(formData.name),
      email: sanitize.email(formData.email),
      phone: sanitize.phone(formData.phone),
      service: sanitize.text(formData.service),
      message: sanitize.text(formData.message),
      preferredContact: formData.preferredContact,
      bestTime: formData.bestTime
    };
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', sanitizedData);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+961 03 345 531',
      subtitle: 'Monday - Friday, 9am - 6pm PST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@sarahchenrd.com',
      subtitle: 'I respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'San Francisco Bay Area',
      subtitle: 'In-person & virtual consultations'
    }
  ];

  const officeHours = [
    { day: 'Monday - Thursday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Saturday', hours: 'By appointment only' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const services = [
    'Weight Management',
    'Medical Nutrition Therapy',
    'Sports Nutrition',
    'Pediatric Nutrition',
    'General Consultation',
    'Corporate Wellness'
  ];

  return (
    <div className="min-h-screen bg-ivory-200">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-sage-50 to-coral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-charcoal-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-charcoal-600 leading-relaxed mb-8">
            Ready to start your health journey? I'd love to hear from you. 
            Reach out to schedule your consultation or ask any questions about my services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as={Link}
              to="/book-consultation"
              size="lg"
              className="inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Free Discovery Call
            </Button>
            <Button
              as="a"
              href="tel:+96103345531"
              variant="outline"
              size="lg"
              className="inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +961 03 345 531
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-poppins font-bold text-charcoal-900 mb-6">
                Send Me a Message
              </h2>
              <p className="text-charcoal-600 mb-8">
                Fill out the form below and I'll get back to you within 24 hours. 
                All communications are confidential and HIPAA-compliant.
              </p>

              {isSubmitted ? (
                <div className="bg-sage-50 border border-sage-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-sage-600 mx-auto mb-4" />
                  <h3 className="text-xl font-poppins font-bold text-charcoal-900 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-charcoal-600 mb-6">
                    Thank you for reaching out. I'll review your message and get back to you 
                    within 24 hours. If this is urgent, please call me directly.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: '',
                        message: '',
                        preferredContact: 'email',
                        bestTime: ''
                      });
                    }}
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:border-sage-500 focus:ring-2 focus:ring-sage-200 focus:outline-none ${
                          errors.name ? 'border-red-300 bg-red-50' : 'border-sage-200'
                        }`}
                        aria-describedby="name-required"
                        autoComplete="name"
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600" role="alert">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:border-sage-500 focus:ring-2 focus:ring-sage-200 focus:outline-none ${
                          errors.email ? 'border-red-300 bg-red-50' : 'border-sage-200'
                        }`}
                        aria-describedby="email-required"
                        autoComplete="email"
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600" role="alert">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:border-sage-500 focus:ring-2 focus:ring-sage-200 focus:outline-none ${
                          errors.phone ? 'border-red-300 bg-red-50' : 'border-sage-200'
                        }`}
                        autoComplete="tel"
                        aria-describedby="phone-optional"
                        aria-invalid={!!errors.phone}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600" role="alert">{errors.phone}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-charcoal-700 mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:border-sage-500 focus:ring-2 focus:ring-sage-200 focus:outline-none ${
                          errors.service ? 'border-red-300 bg-red-50' : 'border-sage-200'
                        }`}
                        aria-invalid={!!errors.service}
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-sm text-red-600" role="alert">{errors.service}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your health goals, any specific concerns, or questions you have..."
                      className={`w-full px-4 py-3 border rounded-lg focus:border-sage-500 focus:ring-2 focus:ring-sage-200 focus:outline-none ${
                        errors.message ? 'border-red-300 bg-red-50' : 'border-sage-200'
                      }`}
                      aria-invalid={!!errors.message}
                      maxLength={1000}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600" role="alert">{errors.message}</p>
                    )}
                    <p className="mt-1 text-sm text-charcoal-500">
                      {formData.message.length}/1000 characters
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <fieldset>
                      <legend className="block text-sm font-medium text-charcoal-700 mb-2">
                        Preferred Contact Method
                      </legend>
                      <div className="space-y-2" role="radiogroup" aria-labelledby="contact-method-legend">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={handleInputChange}
                            className="text-sage-600 focus:ring-sage-500"
                            aria-describedby="email-contact-desc"
                          />
                          <span className="ml-2 text-charcoal-700">Email</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === 'phone'}
                            onChange={handleInputChange}
                            className="text-sage-600 focus:ring-sage-500"
                            aria-describedby="phone-contact-desc"
                          />
                          <span className="ml-2 text-charcoal-700">Phone</span>
                        </label>
                      </div>
                    </fieldset>
                    
                    <div>
                      <label htmlFor="bestTime" className="block text-sm font-medium text-charcoal-700 mb-2">
                        Best Time to Contact
                      </label>
                      <select
                        id="bestTime"
                        name="bestTime"
                        value={formData.bestTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:border-sage-500 focus:ring-2 focus:ring-sage-200 focus:outline-none"
                      >
                        <option value="">Select preferred time</option>
                        <option value="morning">Morning (9am - 12pm)</option>
                        <option value="afternoon">Afternoon (12pm - 4pm)</option>
                        <option value="evening">Evening (4pm - 6pm)</option>
                        <option value="anytime">Anytime</option>
                      </select>
                    </div>
                  </div>

                  {errors.general && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-600 text-sm" role="alert">{errors.general}</p>
                    </div>
                  )}
                  
                  <Button
                    type="submit"
                    loading={isSubmitting}
                    size="lg"
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  <p className="text-sm text-charcoal-500">
                    * Required fields. Your information is secure and HIPAA-compliant.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Details */}
            <div className="animate-slide-up">
              <h2 className="text-3xl font-poppins font-bold text-charcoal-900 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-sage-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold text-charcoal-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-lg text-charcoal-700 mb-1">{info.details}</p>
                        <p className="text-sm text-charcoal-500">{info.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Office Hours */}
              <div className="bg-ivory-50 rounded-xl p-6 mb-8">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-sage-600 mr-3" />
                  <h3 className="text-xl font-poppins font-bold text-charcoal-900">
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-2">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-charcoal-700">{schedule.day}</span>
                      <span className="text-charcoal-600 font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Insurance & Payment */}
              <div className="bg-sage-50 rounded-xl p-6">
                <h3 className="text-xl font-poppins font-bold text-charcoal-900 mb-4">
                  Insurance & Payment
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-sage-600 mr-2" />
                    <span className="text-charcoal-700">Most major insurance plans accepted</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-sage-600 mr-2" />
                    <span className="text-charcoal-700">HSA/FSA eligible</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-sage-600 mr-2" />
                    <span className="text-charcoal-700">Superbills provided for reimbursement</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-sage-600 mr-2" />
                    <span className="text-charcoal-700">Payment plans available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-20 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-charcoal-900 mb-4">
              Visit My Office
            </h2>
            <p className="text-lg text-charcoal-600">
              Located in the heart of San Francisco Bay Area, easily accessible by public transit.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="aspect-w-16 aspect-h-9">
              <div className="w-full h-96 bg-sage-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-sage-600 mx-auto mb-4" />
                  <h3 className="text-xl font-poppins font-bold text-charcoal-900 mb-2">
                    Interactive Map
                  </h3>
                  <p className="text-charcoal-600">
                    123 Health Street, Suite 200<br />
                    San Francisco, CA 94102
                  </p>
                  <p className="text-sm text-charcoal-500 mt-4">
                    Parking available • Public transit accessible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}