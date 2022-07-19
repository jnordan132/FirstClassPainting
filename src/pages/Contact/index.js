function Contact() {
  return (
    <div className="contact">
      <form
        id="contactForm"
        action="https://formsubmit.co/jacob.nordan113322@gmail.com"
        method="POST"
      >
        <input type="email" name="Email" placeholder="Your Email"></input>
        <input type="text" name="Name" placeholder="Name" required></input>
        <input type="subject" name="Subject" placeholder="Subject"></input>
        <textarea
          id="description"
          type="text"
          name="Description"
          placeholder="Description"
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
