import React from 'react';

function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label>Message</label>
          <textarea className="form-control"></textarea>
        </div>
        <button className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}

export default Contact;
