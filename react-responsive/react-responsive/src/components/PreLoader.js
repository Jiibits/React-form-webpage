import React, { useEffect, useState } from "react";
import "./PreLoader.css";

function PreLoader() {
  const [loading, setloading] = useState(false);
  const [completed, setcompleted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 1000);
        });
    }, 2000);
  }, []);

  return (
    <>
      {!completed && (
        <>
          {!loading ? (
            <div className="spinner">
              <div className="half-spinner"></div>
            </div>
          ) : (
            <div className="completed">&#x2713;</div>
          )}
        </>
      )}
    </>
  );
}

export default PreLoader;