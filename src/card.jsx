function Card({ story, name, works }) {
  return (
    <div className="card">
      <div className="commentSection">{story}</div>
      <div className="commentBy">{name}</div>
      <div className="companyWorksFor">{works}</div>
    </div>
  );
}

export default Card;
