import React from "react";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rick-api.herokuapp.com/api/character/avatar/18.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
