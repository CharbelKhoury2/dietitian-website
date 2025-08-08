import React, { useState } from 'react';
import { Calendar, Clock, Video, MapPin, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { Button } from '../ui/Button';

export function BookingPage() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [appointmentType, setAppointmentType] = useState('virtual');

  const services = [
    {
      id: 'discovery',
      name: 'Free Discovery Call',
      duration: '15 minutes',
      price: 'Free',
      description: 'Get to know me and discuss your health goals',
      type: 'virtual-only'
    },
    {
      id: 'weight-management',
      name: 'Weight Management Consultation',
      duration: '90 minutes',
      price: '$200',
      description: 'Comprehensive weight management assessment and planning'
    },
    {
      id: 'medical-nutrition',
      name: 'Medical Nutrition Therapy',
      duration: '120 minutes',
      price: '$250',
      description: 'Specialized nutrition for medical conditions'
    },
    {
      id: 'sports-nutrition',
      name: 'Sports Nutrition Consultation',
      duration: '90 minutes',
      price: '$225',
      description: 'Performance optimization for athletes'
    },
    {
      id: 'pediatric',
      name: 'Pediatric Nutrition (Family)',
      duration: '90 minutes',
      price: '$200',
      description: 'Family-focused nutrition for children'
    },
    {
      id: 'follow-up',
      name: 'Follow-up Session',
      duration: '60 minutes',
      price: '$125',
      description: 'Ongoing support and plan adjustments'
    }
  ];

  const availableDates = [
    '2024-02-01',
    '2024-02-02',
    '2024-02-05',
    '2024-02-06',
    '2024-02-07',
    '2024-02-08',
    '2024-02-09'
  ];

  const availableTimes = [
    '9:00 AM',
    '10:30 AM',
    '12:00 PM',
    '1:30 PM',
    '3:00 PM',
    '4:30 PM'
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const selectedServiceInfo = services.find(s => s.id === selectedService);

  return (
    <div className="min-h-screen bg-ivory-200">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-sage-50 to-coral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-charcoal-900 mb-6">
            Book Your Consultation
          </h1>
          <p className="text-xl text-charcoal-600 leading-relaxed mb-8">
            Take the first step toward better health. Schedule your personalized 
            nutrition consultation with just a few clicks.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
              <CheckCircle className="w-4 h-4 text-sage-500 mr-2" />
              <span className="text-charcoal-700">Free Discovery Call Available</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
              <CheckCircle className="w-4 h-4 text-sage-500 mr-2" />
              <span className="text-charcoal-700">Virtual & In-Person Options</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
              <CheckCircle className="w-4 h-4 text-sage-500 mr-2" />
              <span className="text-charcoal-700">Same Week Availability</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 lg:p-12">
              {/* Step 1: Service Selection */}
              <div className="mb-12">
                <h2 className="text-2xl font-poppins font-bold text-charcoal-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                    1
                  </div>
                  Choose Your Service
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className={`relative p-6 border-2 rounded-xl cursor-pointer transition-all hover:shadow-md ${
                        selectedService === service.id
                          ? 'border-sage-500 bg-sage-50'
                          : 'border-sage-200 hover:border-sage-300'
                      }`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-poppins font-semibold text-charcoal-900">
                          {service.name}
                        </h3>
                        <div className="text-right">
                          <div className="text-lg font-bold text-sage-600">{service.price}</div>
                          <div className="text-sm text-charcoal-500">{service.duration}</div>
                        </div>
                      </div>
                      <p className="text-sm text-charcoal-600">{service.description}</p>
                      
                      {service.type === 'virtual-only' && (
                        <div className="mt-3 inline-flex items-center text-xs text-coral-600">
                          <Video className="w-3 h-3 mr-1" />
                          Virtual only
                        </div>
                      )}
                      
                      {selectedService === service.id && (
                        <div className="absolute top-4 right-4">
                          <CheckCircle className="w-5 h-5 text-sage-600" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2: Appointment Type (if applicable) */}
              {selectedService && selectedServiceInfo?.type !== 'virtual-only' && (
                <div className="mb-12">
                  <h2 className="text-2xl font-poppins font-bold text-charcoal-900 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                      2
                    </div>
                    Choose Appointment Type
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                      className={`p-6 border-2 rounded-xl cursor-pointer transition-all hover:shadow-md ${
                        appointmentType === 'virtual'
                          ? 'border-sage-500 bg-sage-50'
                          : 'border-sage-200 hover:border-sage-300'
                      }`}
                      onClick={() => setAppointmentType('virtual')}
                    >
                      <div className="flex items-center mb-3">
                        <Video className="w-6 h-6 text-sage-600 mr-3" />
                        <h3 className="font-poppins font-semibold text-charcoal-900">
                          Virtual Consultation
                        </h3>
                        {appointmentType === 'virtual' && (
                          <CheckCircle className="w-5 h-5 text-sage-600 ml-auto" />
                        )}
                      </div>
                      <p className="text-sm text-charcoal-600">
                        Meet from the comfort of your home via secure video call
                      </p>
                    </div>
                    
                    <div
                      className={`p-6 border-2 rounded-xl cursor-pointer transition-all hover:shadow-md ${
                        appointmentType === 'in-person'
                          ? 'border-sage-500 bg-sage-50'
                          : 'border-sage-200 hover:border-sage-300'
                      }`}
                      onClick={() => setAppointmentType('in-person')}
                    >
                      <div className="flex items-center mb-3">
                        <MapPin className="w-6 h-6 text-sage-600 mr-3" />
                        <h3 className="font-poppins font-semibold text-charcoal-900">
                          In-Person Visit
                        </h3>
                        {appointmentType === 'in-person' && (
                          <CheckCircle className="w-5 h-5 text-sage-600 ml-auto" />
                        )}
                      </div>
                      <p className="text-sm text-charcoal-600">
                        Visit my office in San Francisco Bay Area
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Date Selection */}
              {selectedService && (
                <div className="mb-12">
                  <h2 className="text-2xl font-poppins font-bold text-charcoal-900 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                      {selectedServiceInfo?.type === 'virtual-only' ? '2' : '3'}
                    </div>
                    Select Date
                  </h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {availableDates.map((date) => (
                      <button
                        key={date}
                        className={`p-4 border-2 rounded-xl text-left transition-all hover:shadow-md ${
                          selectedDate === date
                            ? 'border-sage-500 bg-sage-50'
                            : 'border-sage-200 hover:border-sage-300'
                        }`}
                        onClick={() => setSelectedDate(date)}
                      >
                        <div className="text-sm font-medium text-charcoal-900">
                          {new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}
                        </div>
                        <div className="text-lg font-bold text-charcoal-800">
                          {new Date(date).getDate()}
                        </div>
                        <div className="text-sm text-charcoal-600">
                          {new Date(date).toLocaleDateString('en-US', { month: 'short' })}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Time Selection */}
              {selectedService && selectedDate && (
                <div className="mb-12">
                  <h2 className="text-2xl font-poppins font-bold text-charcoal-900 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                      {selectedServiceInfo?.type === 'virtual-only' ? '3' : '4'}
                    </div>
                    Select Time
                  </h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        className={`p-4 border-2 rounded-xl transition-all hover:shadow-md ${
                          selectedTime === time
                            ? 'border-sage-500 bg-sage-50'
                            : 'border-sage-200 hover:border-sage-300'
                        }`}
                        onClick={() => setSelectedTime(time)}
                      >
                        <div className="flex items-center justify-center">
                          <Clock className="w-4 h-4 text-sage-600 mr-2" />
                          <span className="font-medium text-charcoal-900">{time}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Booking Summary & CTA */}
              {selectedService && selectedDate && selectedTime && (
                <div className="bg-sage-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-poppins font-bold text-charcoal-900 mb-4">
                    Booking Summary
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-charcoal-600">Service:</span>
                      <span className="font-medium text-charcoal-900">{selectedServiceInfo?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-600">Date:</span>
                      <span className="font-medium text-charcoal-900">{formatDate(selectedDate)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-600">Time:</span>
                      <span className="font-medium text-charcoal-900">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-600">Duration:</span>
                      <span className="font-medium text-charcoal-900">{selectedServiceInfo?.duration}</span>
                    </div>
                    {selectedServiceInfo?.type !== 'virtual-only' && (
                      <div className="flex justify-between">
                        <span className="text-charcoal-600">Type:</span>
                        <span className="font-medium text-charcoal-900">
                          {appointmentType === 'virtual' ? 'Virtual Consultation' : 'In-Person Visit'}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between border-t pt-3">
                      <span className="font-medium text-charcoal-900">Total:</span>
                      <span className="text-xl font-bold text-sage-600">{selectedServiceInfo?.price}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {selectedService && selectedDate && selectedTime ? (
                  <Button size="lg" className="flex-1 justify-center">
                    Continue to Booking Form
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                ) : (
                  <div className="flex-1 bg-sage-100 text-sage-600 px-8 py-4 rounded-lg text-center">
                    Please complete all steps above to continue
                  </div>
                )}
                
                <Button
                  variant="outline"
                  size="lg"
                  as="a"
                  href="tel:+96103345531"
                  className="flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call to Book: +961 03 345 531
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-poppins font-bold text-charcoal-900 mb-4">
              What to Expect
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-2">Before Your Appointment</h4>
                <p className="text-charcoal-600">
                  You'll receive a comprehensive health questionnaire to complete, 
                  along with preparation guidelines.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-2">During Your Session</h4>
                <p className="text-charcoal-600">
                  We'll review your health history, discuss your goals, and create 
                  a personalized nutrition plan.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-2">After Your Visit</h4>
                <p className="text-charcoal-600">
                  You'll receive a detailed summary, meal plans, and resources 
                  within 48 hours of your appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}