import React, { useState } from "react";

export default function Button2(props) {
  const [loading, setLoading] = useState(false);

  function handleLoading() {
    setLoading((prevState) => !prevState);
  }
  return (
    <div className="flex flex-col gap-12">
      {loading && <button
        onClick={() => {
          console.log("commment posted");
        }}
      >
        loading
      </button>}
      {!loading && <button
        onClick={() => {
          console.log("commment posted");
        }}
      >
        click me
      </button>}
      <button onClick={handleLoading}>change loading state</button>
    </div>
  );
}
