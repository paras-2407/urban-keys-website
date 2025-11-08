import React from 'react';

const About = () => {
  return (
    <section 
      id="about" 
      className="py-20"
      style={{
        backgroundColor: '#F8FAFC', // A very light gray (slate-50)
        backgroundImage: 
          'linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px),' +
          'linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px)',
        backgroundSize: '25px 25px'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Urban Keys Infra
          </h2>
          <p className="text-xl text-gray-600 max-w-5xl mx-auto">
            Simplifying Your Path to Secure Real Estate Investment
          </p>
        </div>

        {/* Core Value Propositions */}
        <div className="max-w-5xl mx-auto flex flex-col gap-10 text-left">
          <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-lg relative">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Backed by a Legacy of Trust</h3>
            <p className="text-lg text-gray-600">
              Urban Keys Infra is a focused venture by <strong>Urban Keys Infra</strong>, a name trusted in Jaipur's real estate market since 2005. We bring two decades of proven experience and transparency to every transaction.
            </p>
            <span className="absolute bottom-8 right-8 text-sm font-medium text-gray-500">
              -by Goyal Group
            </span>
          </div>
          <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Invest with Confidence</h3>
            <p className="text-lg text-gray-600">
              We specialize exclusively in <strong>JDA- and RERA-approved</strong> residential and commercial projects. This sharp focus ensures that your investment is not just promising, but also legally secure and compliant.
            </p>
          </div>

          <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Expert Guidance at Every Step</h3>
            <p className="text-lg text-gray-600">
              From finding your dream property to finalizing the deal, our team provides professional advisory and complete in-house legal assistance, making the process seamless and stress-free.
            </p>
          </div>

          <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Our Unchanged Commitment</h3>
            <p className="text-lg text-gray-600">
              Our mission remains the same: <strong>“Your Dreams, Our Priority.”</strong> We are dedicated to simplifying and elevating your experience in buying legally approved properties.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;