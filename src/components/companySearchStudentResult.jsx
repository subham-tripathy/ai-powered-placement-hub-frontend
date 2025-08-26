import { useLocation, useNavigate } from "react-router-dom";
import SearchStudentResultCard from "./companySearchStudentResultCard";
import { useEffect, useState } from "react";
import { students } from "./functions";

export default function SearchStudentResult() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [sid, setSID] = useState("");

  useEffect(() => {
    const id = params.get("sid");
    if (id) {
      setSID(id);
    } else {
      navigate("/");
    }
  }, [location.search, navigate]);

  const filteredStudents = students.filter(
    (item) => item.rollNo === sid || item.regnNo === sid
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, auto)",
        gap: "10px",
        margin: "10px",
        marginTop: "25px",
      }}
    >
      {filteredStudents.length > 0 ? (
        filteredStudents.map((item) => (
          <SearchStudentResultCard
            key={item.rollNo}
            student={item}
          />
        ))
      ) : (
        <p>No student found with ID: {sid}</p>
      )}
    </div>
  );
}
