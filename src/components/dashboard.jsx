import ShowModels from "./show-models";
import React, { useState } from 'react';

export default function Dashboard({ models }) {
  const [showModels, setShowModels] = useState(false);
  const handleClick = () => setShowModels(!showModels);

  return (
    <>
    <button onClick={handleClick}>Show Models</button>
    {showModels && <ShowModels models={models}></ShowModels>}
    </>
  );
}
