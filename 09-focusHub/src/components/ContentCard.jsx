import './styles/ContentCard.css';

function ContentCard({ title, copy }) {
  return (
    <div className="content-card">
      <h2 className="content-title">{title}</h2>
      <p className="content-copy">{copy}</p>
    </div>
  );
}

export default ContentCard;
