import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/submit', { email });
      alert(`Email submitted: ${response.data.email}`);
    } catch (error) {
      console.error('There was an error submitting the email!', error);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Welcome to My Web Page</h1>
      </header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <main>
        <section id="home">
          <h2>Home</h2>
          <p>This is the home section of the webpage.</p>
          <button onClick={() => alert('Hello! You clicked the button.')}>Click me</button>
        </section>
        <section id="about">
          <h2>About</h2>
          <p>This is the about section of the webpage.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>This is the contact section of the webpage.</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My Web Page</p>
      </footer>
    </div>
  );
}

export default App;
