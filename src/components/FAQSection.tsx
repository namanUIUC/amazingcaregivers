const FAQSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 relative">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-3xl font-bold md:text-4xl md:leading-tight text-gray-800">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-gray-600">
          Find answers to commonly asked questions about our caregiving services
        </p>
      </div>
      {/* End Title */}

      <div className="max-w-5xl mx-auto">
        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
          <div>
            <h3 className="text-xl font-semibold text-slate-800">
              How do you select your caregivers?
            </h3>
            <p className="mt-2 text-slate-600">
              Our caregivers undergo a rigorous screening process including background checks, reference verification, and professional certification validation. We only select compassionate individuals with proven experience in caregiving.
            </p>
          </div>
          {/* End Col */}

          <div>
            <h3 className="text-xl font-semibold text-slate-800">
              What types of care services do you offer?
            </h3>
            <p className="mt-2 text-slate-600">
              We provide a comprehensive range of services including personal care, medical assistance, senior therapy, emergency services, home visits, and specialized care for various conditions and needs.
            </p>
          </div>
          {/* End Col */}

          <div>
            <h3 className="text-xl font-semibold text-slate-800">
              How quickly can you arrange care services?
            </h3>
            <p className="mt-2 text-slate-600">
              We understand that care needs can arise unexpectedly. In most cases, we can arrange care within 24-48 hours. For emergency situations, we offer expedited services to ensure your loved ones receive care as soon as possible.
            </p>
          </div>
          {/* End Col */}

          <div>
            <h3 className="text-xl font-semibold text-slate-800">
              Are your services covered by insurance?
            </h3>
            <p className="mt-2 text-slate-600">
              Many of our services may be covered by long-term care insurance, Medicare, or Medicaid depending on your specific plan and eligibility. Our team can help you understand your coverage options and assist with the paperwork.
            </p>
          </div>
          {/* End Col */}

          <div>
            <h3 className="text-xl font-semibold text-slate-800">
              Can we change caregivers if needed?
            </h3>
            <p className="mt-2 text-slate-600">
              Absolutely. We prioritize the comfort and satisfaction of our clients. If for any reason you would prefer a different caregiver, simply contact us and we'll arrange a suitable replacement while ensuring a smooth transition of care.
            </p>
          </div>
          {/* End Col */}

          <div>
            <h3 className="text-xl font-semibold text-slate-800">
              What is your cancellation policy?
            </h3>
            <p className="mt-2 text-slate-600">
              We understand that care needs can change. Our service agreements are flexible with a simple 48-hour notice for schedule changes or cancellations. For longer-term care arrangements, please refer to your specific service agreement.
            </p>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    </div>
  );
};

export default FAQSection; 