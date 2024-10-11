import React from 'react';
import { Menu, X, ArrowRight, Smartphone, Globe, Shield, Users } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">LandingCo</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#home" className="text-gray-700 hover:text-indigo-600">Home</a>
              <a href="#features" className="text-gray-700 hover:text-indigo-600">Features</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-indigo-600">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block text-gray-700 hover:text-indigo-600 py-2">Home</a>
              <a href="#features" className="block text-gray-700 hover:text-indigo-600 py-2">Features</a>
              <a href="#about" className="block text-gray-700 hover:text-indigo-600 py-2">About</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-indigo-600 py-2">Testimonials</a>
              <a href="#contact" className="block text-gray-700 hover:text-indigo-600 py-2">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Welcome to LandingCo
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl sm:text-2xl md:mt-5 md:max-w-3xl">
              Elevate your online presence with our cutting-edge solutions
            </p>
            <div className="mt-10 flex justify-center">
              <a href="#contact" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Features
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Discover what makes our product stand out from the rest
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <Smartphone size={24} />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Responsive Design</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Our designs look great on any device, from mobile to desktop.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <Globe size={24} />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Global Reach</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Connect with customers worldwide through our platform.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <Shield size={24} />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Secure & Reliable</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Your data is safe with our state-of-the-art security measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Mission
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              At LandingCo, we're dedicated to helping businesses thrive in the digital world. Our team of experts is committed to delivering innovative solutions that drive growth and success.
            </p>
          </div>
          <div className="mt-10">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Team working together" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center sm:text-4xl">
            What Our Clients Say
          </h2>
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <p className="text-gray-600 italic">"LandingCo transformed our online presence. Their team was professional, creative, and delivered beyond our expectations."</p>
              <p className="mt-4 font-semibold">- Sarah Johnson, CEO of TechStart</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <p className="text-gray-600 italic">"The responsiveness and quality of work from LandingCo is unmatched. They truly understand our business needs."</p>
              <p className="mt-4 font-semibold">- Michael Chen, Founder of GrowthHub</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <p className="text-gray-600 italic">"Working with LandingCo was a game-changer for our startup. Their solutions helped us scale rapidly."</p>
              <p className="mt-4 font-semibold">- Emily Rodriguez, CTO of InnovateCo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-xl text-indigo-200">
              Ready to take your business to the next level? Contact us today!
            </p>
          </div>
          <div className="mt-12">
            <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-white">First name</label>
                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-white">Last name</label>
                <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                <input type="email" name="email" id="email" autoComplete="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Send Message
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold">LandingCo</h3>
              <p className="mt-2">Elevating your online presence</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Users size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Users size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Users size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2023 LandingCo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;