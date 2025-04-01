// pages/contact.js
import Head from 'next/head';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact - Strata Management</title>
      </Head>
      <h1>Contact Us</h1>
      <form method="POST" action="/api/contact">
        <input type="text" name="name" placeholder="Your Name" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}