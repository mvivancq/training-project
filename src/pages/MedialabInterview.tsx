import React, { useState, useEffect } from "react";

const MedialabInterview: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);

        // const res = await fetch("https://api.example.com/items");
        // const data = await res.json();
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error loading data</p>;

  return (
    <div>
      <h2>Medialab Interview</h2>
    </div>
  );
};

export default MedialabInterview;
