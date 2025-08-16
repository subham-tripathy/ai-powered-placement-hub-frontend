export default function SearchStudentResultCard({ id, name, techStack }) {
  return (
    <div className="bg-secondary-subtle text-center p-4 border border-white rounded-3">
      <img
        src="#"
        alt="profile pic"
        style={{ maxHeight: "150px", maxWidth: "150px" }}
        className="bg-secondary rounded-3"
      />
      <h2>{name}</h2>
      <h5>{id}</h5>
      <p>{techStack}</p>
      <button className="btn btn-primary m-0">View Student Profile</button>
    </div>
  );
}
