import React, { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // Import axios for API calls
import "./Frame.css";

export type FrameType = {
  className?: string;
  onClose?: () => void;
};

const Frame: FunctionComponent<FrameType> = ({ className = "", onClose }) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      websiteName: "kjsdentalhospital",
      contactName: name,
      email,
      from: phone,
      message,
      productId: "",
      subject
    };

    try {
      const response = await axios.post("https://api.ewns.in/api/Internal/messages", payload);
      console.log("API Response:", response.data);
      // Handle successful submission (e.g., show a confirmation message)
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle API errors (e.g., show an error message)
    }
  };

  const onXIconClick = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);



  return (
    <div className={`button-parent ${className}`}>
      <div className="button63">
        <button type="submit" className="booking-now1">Booking Now</button>
      </div>
      <div className="title48">
        <div className="book-an-appointment13">Book an Appointment</div>
        <div className="lorem-ipsum-is1">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text with the release.
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="container3">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="label-text" />
          <div className="container-child" />
        </div>
        <div className="container1">
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="label-text" />
          <div className="container-child" />
        </div>
        <div className="container5">
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="label-text" />
          <div className="container-child" />
        </div>
        <div className="container6">
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" className="label-text" />
          <div className="container-child" />
        </div>
        <div className="label-text4">Message</div>
        <textarea className="frame-child24" value={message} onChange={(e) => setMessage(e.target.value)} />
      </form>
      <img className="x-icon" alt="" src="/x.svg" onClick={onXIconClick} />
      <img className="image-icon30" alt="" src="/image32@2x.png" />
    </div>
  );
};

export default Frame;
