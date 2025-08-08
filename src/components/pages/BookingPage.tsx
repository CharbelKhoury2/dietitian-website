import React, { useState, useEffect } from 'react';
import { Calendar, Clock, CheckCircle, Phone, Video, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const BookingPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [appointmentType, setAppointmentType] = useState<'virtual' | 'in-person'>('virtual');
  const [availableDates, setAvailableDates] = useState<string[]>([]);

  const services = [
    {
      id: 'initial-consultation',
      name: 'Initial Consultation',
      description: 'Comprehensive health assessment and personalized nutrition plan',
      duration: '60 minutes',
      type: 'both'
    },
    {
      id: 'follow-up',
      name: 'Follow-up Session',
      description: 'Progress review and plan adjustments',
      duration: '30 minutes',
      type: 'both'
    },
    {
      id: 'meal-planning',
      name: 'Meal Planning Session',
      description: 'Detailed meal plans and grocery shopping guidance',
      duration: '45 minutes',
      type: 'virtual-only'
    },
    {
      id: 'group-session',
      name: 'Group Nutrition Workshop',
      description: 'Interactive workshop covering nutrition fundamentals',
      duration: '90 minutes',
      type: 'both'
    }
  ];

  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const selectedServiceInfo = services.find(s => s.id === selectedService);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  useEffect(() => {
    // Generate available dates (next 30 days, excluding weekends)
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 45; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date.toISOString().split('T')[0]);
      }
      
      if (dates.length >= 30) break;
    }
    
    setAvailableDates(dates);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Book Your
              <span className="text-green-600"> Consultation</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Take the first step towards a healthier you. Schedule your personalized nutrition consultation today.
            </p>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Schedule Your Appointment</h2>
            
            {/* Service Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Select a Service</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedService === service.id
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <h4 className="font-semibold text-gray-900">{service.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                    <div className="mt-3">
                      <span className="text-sm text-gray-500">{service.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Appointment Type Selection */}
            {selectedService && selectedServiceInfo?.type !== 'virtual-only' && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Appointment Type</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      appointmentType === 'virtual'
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                    onClick={() => setAppointmentType('virtual')}
                  >
                    <div className="flex items-center space-x-3">
                      <Video className="h-6 w-6 text-green-600" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Virtual Consultation</h4>
                        <p className="text-sm text-gray-600">Meet from the comfort of your home</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      appointmentType === 'in-person'
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                    onClick={() => setAppointmentType('in-person')}
                  >
                    <div className="flex items-center space-x-3">
                      <a
                        href="https://www.google.com/maps/place/33.985842,35.638290/@33.985842,35.638290,17z"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MapPin className="h-6 w-6 text-green-600 hover:text-green-700" />
                      </a>
                      <div>
                        <h4 className="font-semibold text-gray-900">In-Person Visit</h4>
                        <p className="text-sm text-gray-600">Visit our Lebanon office</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Date Selection */}
            {selectedService && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Date</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {availableDates.slice(0, 15).map((date) => (
                    <button
                      key={date}
                      className={`p-3 text-sm border rounded-lg transition-all ${
                        selectedDate === date
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-gray-200 hover:border-green-300 text-gray-700'
                      }`}
                      onClick={() => setSelectedDate(date)}
                    >
                      <div className="flex flex-col items-center">
                        <Calendar className="h-4 w-4 mb-1" />
                        <span className="font-medium">
                          {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                        <span className="text-xs">
                          {new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Time Selection */}
            {selectedDate && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Time</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {availableTimes.map((time) => (
                    <button
                      key={time}
                      className={`p-3 text-sm border rounded-lg transition-all ${
                        selectedTime === time
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-gray-200 hover:border-green-300 text-gray-700'
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{time}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Booking Summary */}
            {selectedService && selectedDate && selectedTime && (
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service:</span>
                    <span className="font-medium">{selectedServiceInfo?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">{formatDate(selectedDate)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{selectedServiceInfo?.duration}</span>
                  </div>
                  {selectedServiceInfo?.type !== 'virtual-only' && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-medium capitalize">
                        {appointmentType === 'virtual' ? 'Virtual Consultation' : 'In-Person Visit'}
                      </span>
                    </div>
                  )}
                </div>
                
                <Button className="w-full mt-6 flex items-center justify-center space-x-2">
                  <span>Confirm Booking</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                
                <p className="text-sm text-gray-500 text-center mt-4">
                  You'll receive a confirmation email with meeting details after booking.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* What to Expect Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What to Expect
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Your journey to better health starts here
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mx-auto">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Comprehensive Assessment</h3>
                <p className="mt-2 text-base text-gray-500">
                  We'll review your health history, dietary habits, and lifestyle to create a complete picture.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mx-auto">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Personalized Plan</h3>
                <p className="mt-2 text-base text-gray-500">
                  Receive a customized nutrition plan tailored to your specific goals and preferences.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mx-auto">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Ongoing Support</h3>
                <p className="mt-2 text-base text-gray-500">
                  Get continuous guidance and adjustments to ensure you stay on track with your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;