// import React from 'react';
// import './ContactUs.css';
// import imageUrl from '../Assets/OldSchool.jpeg';

// function ContactUs() {
//   return (
//     <section className="contact-us-container">
//       <div className="contact-us-content">
//         <div className="contact-us-form">
//           <h2 className="contact-us-heading">Contact Us</h2>
//           <h1 className="contact-us-title">
//             Send Us a Message <br /> & Join Our Team
//           </h1>
//           <div className="form-fields">
//             <input type="text" placeholder="Name" className="form-input" />
//             <input type="text" placeholder="Phone" className="form-input" />
//             <input type="email" placeholder="Email" className="form-input" />
//             <input type="text" placeholder="Subject" className="form-input" />
//             <button className="send-button">
//               Send Now <span className="arrow">→</span>
//             </button>
//           </div>
//         </div>
//         <div className="contact-us-image">
//           <img src={imageUrl} alt="Old School" className="image" />
//         </div>
//       </div>
//       <div className="location-map">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840289118536!2d144.95373631531667!3d-37.81827197975177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1e3c2b1%3A0x5045675218ce7e0!2sSouthern%20Cross%20Station%2C%20Spencer%20St%2C%20Docklands%20VIC%203008%2C%20Australia!5e0!3m2!1sen!2sus!4v1697041234567!5m2!1sen!2sus"
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           title="ShinePoint Health Location"
//         ></iframe>
//       </div>
//     </section>
//   );
// }

// export default ContactUs;

import React from 'react';
import './ContactUs.css';
import imageUrl from '../Assets/OldSchool.jpeg'; // Asset path.

function ContactUs({ imageAlt }) {
  return (
    <div className="full-width-container">
      <img src={imageUrl} alt={imageAlt} className="image" />
      <div className="overlay-dark"></div>
      <div className="text-overlay"> 
      <div className="contact-us-content">       
      <div className="contact-us-form">
        <h2 className="contact-us-heading">Contact Us</h2>      
        <h1 className="contact-us-title">          Send Us a Message <br /> & Join Our Team
        </h1>
       <div className="form-fields">
          <input type="text" placeholder="Name" className="form-input" />
          <input type="text" placeholder="Phone" className="form-input" />
          <input type="email" placeholder="Email" className="form-input" />
          <input type="text" placeholder="Subject" className="form-input" />          <button className="send-button">
          Send Now <span className="arrow">→</span>
            </button>
          </div>

        
          </div>

      </div>
    </div>
    </div>
    
  );
}

export default ContactUs;
