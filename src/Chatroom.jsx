import './Chatroom.css';
import { useState } from 'react';

function Chatroom() {
    const [prompt, setPrompt] = useState(''); // User input (symptom)
    const [response, setResponse] = useState(''); // Backend response (confirmation message)
    const [summary, setSummary] = useState(''); // Doctor summary

    // Set backend URL based on the environment (development or production)
    const backendUrl = process.env.NODE_ENV === 'development' 
        ? 'http://localhost:8000' 
        : 'https://bridge-fe-8aeb1e1bce30.herokuapp.com/'; 

    // Function to handle the symptom submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Log the symptom via the /log-symptom endpoint
        fetch(`${backendUrl}/symptoms/log-symptom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                symptom: prompt, // Send the user's symptom input
            }),
        })
        .then(response => response.json())
        .then(data => {
            // Update the response message upon successful symptom logging
            setResponse('Symptom logged successfully: ' + prompt);
            setPrompt(''); // Clear the input field after logging
        })
        .catch(err => {
            setResponse('Error logging symptom, please try again.');
            console.error('Error:', err);
        });
    };

    // Function to generate the doctor summary
    const generateSummary = () => {
        // Fetch summary via the /generate-summary endpoint
        fetch(`${backendUrl}/symptoms/generate-summary`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            // Display the generated summary in the chat
            setSummary(data.summary || 'No summary available.');
        })
        .catch(err => {
            setSummary('Error generating summary, please try again.');
            console.error('Error:', err);
        });
    };

    return (
        <div className='Chatroom'>
            {/* Chat interface */}
            <div className="chat">
                {/* Initial message */}
                <div className="sent">
                    <p>Hello! Please log your symptoms for tracking and insights.</p>
                </div>

                {/* Display the backend response or confirmation message */}
                <div className="received">
                    <p>{response ? response : "I’m here to assist with logging your symptoms."}</p>
                </div>

                {/* Display the generated summary */}
                {summary && (
                    <div className="received">
                        <p><strong>Doctor Summary:</strong> {summary}</p>
                    </div>
                )}
            </div>

            {/* Form for entering symptoms */}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={prompt} 
                    placeholder='Enter your symptoms (e.g., headache, fatigue)' 
                    onChange={e => setPrompt(e.target.value)} 
                />
                <input type="submit" value="Log Symptom" />
            </form>

            {/* Button to generate doctor summary */}
            <button onClick={generateSummary} className="generate-summary-btn">
                Generate Doctor Summary
            </button>
        </div>
    );
}

export default Chatroom;
