import SearchStudentResultCard from "./companySearchStudentResultCard";

export default function SearchStudentResult() {
  const array = [
    {
      id: "1234",
      profilePic: "",
      name: "Subham Tripathy",
      techStack: "Full Stack Web Developer",
    },
    {
      id: "1234",
      profilePic: "",
      name: "Subham Tripathy",
      techStack: "Full Stack Web Developer",
    },
    {
      id: "1234",
      profilePic: "",
      name: "Subham Tripathy",
      techStack: "Full Stack Web Developer",
    },
    {
      id: "1234",
      profilePic: "",
      name: "Subham Tripathy",
      techStack: "Full Stack Web Developer",
    },
    {
      id: "1234",
      profilePic: "",
      name: "Subham Tripathy",
      techStack: "Full Stack Web Developer",
    },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, auto)", gap:"10px", margin:"10px", marginTop:"25px" }}>
      {array.map((item) => {
        return (
          <SearchStudentResultCard
            id={item.id}
            name={item.name}
            techStack={item.techStack}
          />
        );
      })}
    </div>
  );
}
