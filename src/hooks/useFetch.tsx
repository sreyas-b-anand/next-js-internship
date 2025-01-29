"use client"
import { useState, useEffect } from 'react';

export const useFetch = () => {
    const [time, setTime] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTime = async () => {
            try {
                // Fetch current time in London from WorldTimeAPI
                const response = await fetch('http://worldtimeapi.org/api/timezone/Europe/London.json');
                
                // Check if the response is ok
                if (!response.ok) {
                    throw new Error('Failed to fetch time');
                }
                
                // Parse the JSON response
                const data = await response.json();
                
                // Get the current time in London
                const currentTime = new Date(data.datetime); // The datetime is in ISO 8601 format
                const time = currentTime.toISOString();
                console.log('Current Time in London:', time);

                // Set the time data to state
                setTime(time);
                setError(null);  // Clear any previous error
            } catch (error) {
                console.error('Error fetching time:', error);
                setTime(null);  // Clear any previous time
                setError('Failed to fetch time');
            }
        };

        fetchTime();
    }, []);

    return { time, error };
};
