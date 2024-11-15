import React, { useState } from 'react';

function TemplateUploader() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [link, setLink] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setLink(''); // Clear link field if a file is selected
    } else {
      alert('Please select a PDF file.');
    }
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
    setFile(null); // Clear file if a link is provided
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert('Please fill in all required fields.');
      return;
    }

    if (!file && !link) {
      alert('Please upload a PDF file or provide a template link.');
      return;
    }

    // Handle form submission logic here
    console.log({
      title,
      description,
      file,
      link,
    });

    alert('Template uploaded successfully!');
    // Reset form fields
    setTitle('');
    setDescription('');
    setFile(null);
    setLink('');
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-16 bg-white rounded-lg shadow-2xl">
      <h2 className="text-4xl p-6 font-bold text-center text-green-500 mb-4">Upload Your Template</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2">Template Title</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2">Template Description</label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2">Upload Template File (EXCEL)</label>

          <input type="file"  onChange={handleFileChange}  accept="application/xlsx"
            disabled={link.length > 0} className="file-input file-input-bordered file-input-success w-full max-w-xs" />
          
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2">Template Link</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={link}
            onChange={handleLinkChange}
            placeholder="Enter link instead of uploading PDF"
            disabled={file !== null}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Upload Template
        </button>
      </form>
    </div>
  );
}

export default TemplateUploader;
