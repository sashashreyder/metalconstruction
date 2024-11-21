import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2>Get in Touch</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
