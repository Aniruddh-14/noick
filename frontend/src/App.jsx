import { useState } from 'react';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Loading from './pages/Loading';
import Report from './pages/Report';

const API_URL = 'http://localhost:8000';

export default function App() {
  const [page, setPage] = useState('landing');
  const [username, setUsername] = useState('');
  const [platform, setPlatform] = useState('twitter');
  const [reportData, setReportData] = useState(null);

  const handleAnalyze = async (inputUsername, inputPlatform) => {
    setUsername(inputUsername);
    setPlatform(inputPlatform);
    setPage('loading');

    try {
      const res = await fetch(`${API_URL}/api/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: inputUsername, platform: inputPlatform }),
      });

      const data = await res.json();

      // Minimum delay so loading screen feels real
      setTimeout(() => {
        setReportData(data);
        setPage('report');
      }, 3500);
    } catch (err) {
      console.error('Analysis failed:', err);
      alert('Failed to connect to the analysis engine. Make sure the backend is running on port 8000.');
      setPage('landing');
    }
  };

  const handleSampleReport = () => {
    handleAnalyze("sample_creator", "twitter");
  };

  const handleReset = () => {
    setPage('landing');
    setReportData(null);
    setUsername('');
  };

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      {page === 'landing' && (
        <Landing onAnalyze={handleAnalyze} onSampleReport={handleSampleReport} />
      )}
      {page === 'loading' && (
        <Loading username={username} platform={platform} />
      )}
      {page === 'report' && reportData && (
        <Report data={reportData} onReset={handleReset} />
      )}
    </div>
  );
}
