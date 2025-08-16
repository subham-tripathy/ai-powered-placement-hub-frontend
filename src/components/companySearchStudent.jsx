export default function SearchStudent() {
  return (
    <main>
      <form style={{width:"85%"}} className="mx-auto form text-center">
        <h1 className="text-decoration-underline">Search for Student</h1>
        <br />
        <input
          className="form-control"
          type="search"
          placeholder="Student's Unique ID:"
        />
        <br />
        <select className="form-select">
          <option hidden>Select Your Preferred Technology</option>
          <option value={"Java Full Stack"}>Java Full Stack</option>
          <option value={"DotNet Full Stack"}>DotNet Full Stack</option>
          <option value={"Mern Stack"}>Mern Stack</option>
          <option value={"Full Stack"}>Full Stack</option>
          <option value={"Node JS"}>Node JS</option>
          <option value={"React JS"}>React JS</option>
        </select>
        <br />
        <button style={{width:"80%"}} className="btn btn-primary">Search</button>
      </form>
    </main>
  );
}
