import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary-100 mb-8">What Our Users Have to Say</h2>
        <p className="text-primary-100 max-w-2xl mx-auto">
          "CalorieTracker helped me achieve my health goals with precision and ease. The insights are incredibly useful!"
          <br />
          <span className="text-primary-300 font-semibold">- Happy User</span>
        </p>
      </div>
    </section>
  );
}