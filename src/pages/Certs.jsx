import certs from "../data/certificates";

export default function Certifications() {
  return (
    <div className="certifications-page">
        <h1 className="certifications-header">
            My Certifications
        </h1>

      <div className="certifications-grid">
        {certs.map((cert) => (
          <a 
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className="cert-card"            
          >
            <img src={cert.image} alt={cert.title} />
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
          </a>
        ))}
      </div>
    </div>
  );
}