import React, { useState } from 'react';

function Contact() {
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (e.target.elements.password.value === "swordfish") {
      setAuthorized(true);
    }
  }

  const login = (
    <form action="#" onSubmit={handleSubmit}>
      <input type="password" name="password" placeholder="Password"/>
      <input type="submit" value="Submit" />
    </form>
  );

  const contactInfo = (
    <ul>
      <li>client@gmail.com</li>
      <li>837 379 333</li>
    </ul>
  );

  return (
      <div>
        <h1>{authorized ? "Contact" : "Enter the Password"}</h1>
        {authorized ? contactInfo : login}
      </div>
    );
}

export default Contact;

