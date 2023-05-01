import React from "react";
import "./App.css";

const styles = {
  container: `
    flex text-center bg-slate-800 justify-center items-center h-screen text-white text-5xl
    `,
};

const App = () => {
  return (
    <div className={styles.container}>
      <h1>hello world</h1>
    </div>
  );
};

export default App;
