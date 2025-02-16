import React, { useState } from 'react';

const Form = () => {
  // Form state to store field data
  const [formData, setFormData] = useState({
    companyName: '',
    contactNumber: '',
    servicesOffered: '',
    contactInfo: '',
    portfolio: '',
    workSummary: '',
    websiteOverview: '',
    testimonials: '',
    achievements: '',
    clients: '',
    teamInfo: '',
    images: '',
    additionalInfo: '',
    driveLink: '',
  });

  // Error state to track which fields are not filled
  const [errors, setErrors] = useState({
    companyName: false,
    contactNumber: false,
    servicesOffered: false,
    contactInfo: false,
    portfolio: false,
    workSummary: false,
    websiteOverview: false,
    testimonials: false,
    achievements: false,
    clients: false,
    teamInfo: false,
    images: false,
    additionalInfo: false,
    driveLink: false,
  });

  // Handle input changes for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Remove the error when user starts typing
    setErrors({
      ...errors,
      [name]: false,
    });
  };

  // Handle image input changes
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        images: file.name,
      });
      setErrors({
        ...errors,
        images: false,
      });
    }
  };

  // Validate form and highlight errors for empty fields
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    let hasErrors = false;

    // Check if any field is empty
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = true;
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(newErrors); // Show errors if fields are not filled
    } else {
      // Proceed with form submission (e.g., API call)
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      
      {/* Company Name Field */}
      <div className="form-group">
        <label className="form-label">
          Company Name {errors.companyName && <span style={{ color: 'red' }}>*</span>}
        </label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
          className={`form-input ${errors.companyName ? 'error' : ''}`} 
        />
      </div>

      {/* Contact Number Field */}
      <div className="form-group">
        <label className="form-label">
          Contact Number {errors.contactNumber && <span style={{ color: 'red' }}>*</span>}
        </label>
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleInputChange}
          className={`form-input ${errors.contactNumber ? 'error' : ''}`} 
        />
      </div>

      {/* Services Offered Field */}
      <div className="form-group">
        <label className="form-label">
          Services Offered {errors.servicesOffered && <span style={{ color: 'red' }}>*</span>}
        </label>
        <input
          type="text"
          name="servicesOffered"
          value={formData.servicesOffered}
          onChange={handleInputChange}
          className={`form-input ${errors.servicesOffered ? 'error' : ''}`} 
        />
      </div>

      {/* Contact Info Field */}
      <div className="form-group">
        <label className="form-label">
          Contact Info {errors.contactInfo && <span style={{ color: 'red' }}>*</span>}
        </label>
        <input
          type="text"
          name="contactInfo"
          value={formData.contactInfo}
          onChange={handleInputChange}
          className={`form-input ${errors.contactInfo ? 'error' : ''}`} 
        />
      </div>

      {/* Portfolio Field */}
      <div className="form-group">
        <label className="form-label">
          Portfolio {errors.portfolio && <span style={{ color: 'red' }}>*</span>}
        </label>
        <input
          type="text"
          name="portfolio"
          value={formData.portfolio}
          onChange={handleInputChange}
          className={`form-input ${errors.portfolio ? 'error' : ''}`} 
        />
      </div>

      {/* Work Summary Field */}
      <div className="form-group">
        <label className="form-label">
          Work Summary {errors.workSummary && <span style={{ color: 'red' }}>*</span>}
        </label>
        <input
          type="text"
          name="workSummary"
          value={formData.workSummary}
          onChange={handleInputChange}
          className={`form-input ${errors.workSummary ? 'error' : ''}`} 
        />
      </div>

      {/* Website Overview Field */}
      <div className="form-group">
        <label className="form-label">
          Website Overview {errors.websiteOverview && <span style={{ color: 'red' }}>*</span>}
        </label>
        <input
          type="text"
          name="websiteOverview"
          value={formData.websiteOverview}
          onChange={handleInputChange}
          className={`form-input ${errors.websiteOverview ? 'error' : ''}`} 
        />
      </div>

      {/* Testimonials Field */}
      <div className="form-group">
        <label className="form-label">
          Testimonials {errors.testimonials && <span style={{ color: 'red' }}>*</span>}
        </label>
        <input
          type="text"
          name="testimonials"
          value={formData.testimonials}
          onChange={handleInputChange}
          className={`form-input ${errors.testimonials ? 'error' : ''}`} 
        />
      </div>

      {/* Achievements Field */}
      <div className="form-group">
        <label className="form-label">
          Achievements {errors.achievements && <span style={{ color: 'red' }}>*</span>}
        </label>
        <input
          type="text"
          name="achievements"
          value={formData.achievements}
          onChange={handleInputChange}
          className={`form-input ${errors.achievements ? 'error' : ''}`} 
        />
      </div>

      {/* Clients Field */}
      <div className="form-group">
        <label className="form-label">
          Clients {errors.clients && <span style={{ color: 'red' }}>*</span>}
        </label>
        <input
          type="text"
          name="clients"
          value={formData.clients}
          onChange={handleInputChange}
          className={`form-input ${errors.clients ? 'error' : ''}`} 
        />
      </div>

      {/* Team Info Field */}
      <div className="form-group">
        <label className="form-label">
          Team Info {errors.teamInfo && <span style={{ color: 'red' }}>*</span>}
        </label>
        <input
          type="text"
          name="teamInfo"
          value={formData.teamInfo}
          onChange={handleInputChange}
          className={`form-input ${errors.teamInfo ? 'error' : ''}`} 
        />
      </div>

      {/* Images Field */}
      <div className="form-group">
        <label className="form-label">
          Images {errors.images && <span style={{ color: 'red' }}>*</span>}
        </label>
        <input
          type="file"
          name="images"
          onChange={handleImageChange}
          className={`form-input ${errors.images ? 'error' : ''}`}
        />
      </div>

      {/* Additional Info Field */}
      <div className="form-group">
        <label className="form-label">
          Additional Info {errors.additionalInfo && <span style={{ color: 'red' }}>*</span>}
        </label>
        <input
          type="text"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleInputChange}
          className={`form-input ${errors.additionalInfo ? 'error' : ''}`} 
        />
      </div>

      {/* Drive Link Field */}
      <div className="form-group">
        <label className="form-label">
          Drive Link {errors.driveLink && <span style={{ color: 'red' }}>*</span>}
        </label>
        <input
          type="text"
          name="driveLink"
          value={formData.driveLink}
          onChange={handleInputChange}
          className={`form-input ${errors.driveLink ? 'error' : ''}`} 
        />
      </div>

      {/* Submit Button */}
      <div className="button-group">
        <button type="submit" className="form-button">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
