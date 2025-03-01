import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../NotFound/notFound.scss";

const NotFound = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(10); 
  const [fadeOut, setFadeOut] = useState(false); 

  useEffect(() => {
    if (count <= 0) {
      setFadeOut(true); 
      setTimeout(() => navigate("/"), 1000); 
      return;
    }

    const timer = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup?
  }, [count, navigate]);

  return (
    // Apply fade-out effect 
    <div className={`not-found ${fadeOut ? "fade-out" : ""}`}>  
      <img src="/assets/NotFound/404_Error.png" alt="404 Error" />
      <p>Oops! The page you're looking for doesn't exist.</p>
      <p>Redirecting to Home in {count} Seconds...</p>
    </div>
  );
};

export default NotFound;
