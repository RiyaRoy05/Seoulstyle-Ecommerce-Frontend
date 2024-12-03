import React from 'react';
import CustomerHeader from './CustomerHeader';
import CustomerFooter from './CustomerFooter';
import './Help.css';

function Help() {
  return (
    <div className="help-page">
      <CustomerHeader />
      <div className="help-container">
        <h1 className="help-heading">How Can We Help You?</h1>

        <div className="faq-section">
          <h2 className='help-h2'>Frequently Asked Questions</h2>
          <ul className='help-ul'>
            <li className='helpli'>
              <strong>Q: How can I track my order?</strong>
              <p className='help-p'>A: Go to the "Orders" page and click "View Details" for tracking information.</p>
            </li>
            <li  className='helpli'>
              <strong>Q: Can I cancel my order?</strong>
              <p className='help-p'>A: Yes, you can cancel your order if it's not yet processed. Visit the "Orders" page for options.</p>
            </li>
            <li  className='helpli'>
              <strong>Q: How do I contact customer support?</strong>
              <p className='help-p'>A: You can use the "Contact Support" button below to reach our team.</p>
            </li>
          </ul>
        </div>

        <div className="contact-section">
          <h2 className='help-contactus'>Contact Us</h2>
          <p>If you have any other questions, feel free to reach out to our support team.</p>
          <button className="contact-btn">Contact Support</button>
        </div>

        <div className="feedback-section">
          <h2>Feedback</h2>
          <p>We'd love to hear your thoughts on our service!</p>
          <form className="feedback-form">
            <textarea placeholder="Share your feedback here..." rows="5"></textarea>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
      <CustomerFooter/>
    </div>
  );
}

export default Help;
