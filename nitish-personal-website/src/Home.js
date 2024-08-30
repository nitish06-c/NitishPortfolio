import React from 'react';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Nitish Madabusi</div>
          <div className="text-3">I'm a <span className="typing">Computer Science Student</span></div>
          <div className="text-4"><span>at the University of Toronto</span></div>
          <a href='https://test.com'>Test</a>
        </div>
      </div>
    </section>
  );
};

export default Home;