import { useState } from "react";

export default function Contact() {
  const [formSubmission, setFormSubmission] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormSubmission((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const emailVal = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    const validateError = {};
    if (!formSubmission.name.trim()) {
      validateError.name = "Name is required!";
    }
    if (!formSubmission.email.trim()) {
      validateError.email = "Email is required!";
    } else if (!emailVal(formSubmission.email)) {
      validateError.email = "Email is invalid!";
    }
    if (!formSubmission.message.trim()) {
      validateError.message = "Message is required!";
    }

    // Check if errors exist
    if (Object.keys(validateError).length > 0) {
      setErrors(validateError);
      return;
    }

    setErrors({});
  };

  return (
    <div className="contact-div">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formSubmission.name}
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formSubmission.email}
          onChange={handleChange}
        />
        <label>Message:</label>
        <textarea
          type="text"
          name="message"
          value={formSubmission.message}
          onChange={handleChange}
        />
        {Object.keys(errors).length > 0 && (
          <p className="form-error">
            {Object.values(errors).map((error, index) => (
              <span key={index}>{error}</span>
            ))}
          </p>
        )}
        <button type="submit">Submit message!</button>
      </form>
    </div>
  );
}
