import React, { useState, useEffect } from 'react';

export default function FetchUserApp() {
  const [ user, setUser ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      //trycatch, JavaScript feature used to run code and perfect error handling. Prevents app from crashing

      try {       
        setLoading(true);
        console.log('loading api');
        const response = await fetch('https://randomuser.me/api/');
        console.log('data fetched')
        const data = await response.json();
        setUser(data.results[0]);
      } catch (err) {
        setError('Error fetching user data');
      } finally {
        setLoading(false);
      }

    }
    fetchUser();        // call fetchuser function
  }, []);               //useEffect runs once with []
  
  if (loading) return <p>Loading User......</p>;
  if (error) return <p>{error}</p>;

  return(
    <div>
      <h2>Fetch User App</h2>
      <img src= {user.picture.large} alt="User Profile" style={{borderRadius: '50%'}} />
      <p>Name: {user.name.first} {user.name.last}</p>
      <p>E-mail: {user.email}</p>
      <p>Country: {user.location.country}</p>
    </div>
  );
}
