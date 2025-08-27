import CompanyHomePageCard from "./companyHomePageCard";

export default function CompanyHomePage() {
  const functionalties = [
    {
      title: "Search Student's Data",
      url: "/company/searchStudent",
    },
    {
      title: "Add a job post",
      url: "/company/createPost",
    },
  ];

  
  return (
    <main className="p-3">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, auto)",
        }}
      >
        {functionalties.map((item) => {
          return <CompanyHomePageCard key={item.title} title={item.title} url={item.url} />;
        })}
      </div>
    </main>
  );
}
