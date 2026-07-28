import React, { useState } from 'react';
import { Search, Loader } from 'lucide-react';
import { printApi } from '../lib/api';

const RetrieveForm = ({ onRetrieveSuccess }) => {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (code.length !== 4) {
      setError('Please enter a 4-digit code');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await printApi.getPrintJob(code);
      if (response.success) {
        onRetrieveSuccess(response.data);
      } else {
        setError(response.error || 'Code not found');
      }
    } catch (err) {
      setError(err.response?.data?.error || err.message || 'Code not found or expired');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 4);
    setCode(val);
  };

  return (
    <div className="card">
      <h2>Retrieve File</h2>
      <p>Enter the 4-digit code to print or download your file.</p>
      
      <form onSubmit={handleSubmit} className="input-group mt-4">
        <input 
          type="text" 
          className="input-code" 
          placeholder="0000" 
          value={code}
          onChange={handleChange}
          autoComplete="off"
        />
        
        <button 
          type="submit" 
          className="btn btn-primary btn-full mt-4"
          disabled={isLoading || code.length !== 4}
        >
          {isLoading ? (
            <Loader className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
          ) : (
            <Search size={20} />
          )}
          Find File
        </button>
      </form>

      {error && (
        <div className="alert alert-error mt-4">
          {error}
        </div>
      )}
    </div>
  );
};

export default RetrieveForm;
