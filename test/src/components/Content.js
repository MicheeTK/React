import React from "react";

export const Content = () => {
  const handleNameChange = function () {
    const stream = ["Science", "Techonology", "Engineering", "Mathematics"];
    const i = Math.floor(Math.random() * 4);
    return stream[i];
  };
  return (
    <main>
      <div className="playing-aroung-1 App-header">
        <p>Imagine a world without {handleNameChange()}!</p>
      </div>
      ;
    </main>
  );
};
//ignore comment
