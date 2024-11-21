import './Services.css';

function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2>Have an Idea?</h2>
        <div className="services-grid">
          <div className="service">
            <img src="/icons/3d-scan.svg" alt="3D Scanning" />
            <h3>3D Scanning</h3>
            <p>Capture complete 3D forms with precise details.</p>
          </div>
          <div className="service">
            <img src="/icons/reverse-engineering.svg" alt="Reverse Engineering" />
            <h3>Reverse Engineering</h3>
            <p>Create accurate parametric models from real-world objects.</p>
          </div>
          <div className="service">
            <img src="/icons/3d-design.svg" alt="3D Design" />
            <h3>3D Design</h3>
            <p>Transform your ideas into stunning digital models.</p>
          </div>
          <div className="service">
            <img src="/icons/3d-printing.svg" alt="3D Printing" />
            <h3>3D Printing</h3>
            <p>High-quality 3D prints to bring your concepts to life.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
