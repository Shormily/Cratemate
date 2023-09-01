import React, { useState } from 'react';

function EmailForm() {
  const [recipientEmail, setRecipientEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('recipientEmail', recipientEmail);
    formData.append('subject', subject);
    formData.append('message', message);
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Email sending failed');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className='max-w-[1440px] m-auto'>
<form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="recipientEmail">Recipients Email:</label>
        <input
          type="email"
          id="recipientEmail"
          value={recipientEmail}
          onChange={(e) => setRecipientEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="file">Attach PDF:</label>
        <input
          type="file"
          id="file"
          accept=".pdf"
          onChange={handleFileChange}
        />
      </div>
      <div>
        <button
         className="text-white bg-gradient-to-br from-red-800 to-red-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-sm text-sm px-5 py-2.5 text-center mb-2"
         value="sent"
        type="submit">Send Email</button>
      </div>
    </form>
    </div>
    
  );
}

export default EmailForm;