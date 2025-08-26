export const backendURL = "http://localhost:3000";

export function validateEmail(email) {
  if (typeof email !== "string") return false;

  const value = email.trim();
  if (value.length < 3) return false;

  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return re.test(value);
}


export const students = [
  { regnNo: "22ug010001", rollNo: "22cse001", programme: "B.Tech", branch: "CSE", name: "Aarav Sharma", gender: "Male", email: "aarav.sharma01@example.com" },
  { regnNo: "22ug010002", rollNo: "22cse002", programme: "B.Tech", branch: "CSE", name: "Priya Verma", gender: "Female", email: "priya.verma02@example.com" },
  { regnNo: "22ug020003", rollNo: "22mech003", programme: "B.Tech", branch: "MECH", name: "Rohit Kumar", gender: "Male", email: "rohit.kumar03@example.com" },
  { regnNo: "22ug030004", rollNo: "22eee004", programme: "B.Tech", branch: "EEE", name: "Sneha Iyer", gender: "Female", email: "sneha.iyer04@example.com" },
  { regnNo: "22ug040005", rollNo: "22civil005", programme: "B.Tech", branch: "CIVIL", name: "Arjun Nair", gender: "Male", email: "arjun.nair05@example.com" },
  { regnNo: "22ug010006", rollNo: "22cse006", programme: "B.Tech", branch: "CSE", name: "Neha Singh", gender: "Female", email: "neha.singh06@example.com" },
  { regnNo: "22ug050007", rollNo: "22ece007", programme: "B.Tech", branch: "ECE", name: "Kunal Mehta", gender: "Male", email: "kunal.mehta07@example.com" },
  { regnNo: "22ug020008", rollNo: "22mech008", programme: "B.Tech", branch: "MECH", name: "Ishita Roy", gender: "Female", email: "ishita.roy08@example.com" },
  { regnNo: "22ug010009", rollNo: "22cse009", programme: "B.Tech", branch: "CSE", name: "Vikram Desai", gender: "Male", email: "vikram.desai09@example.com" },
  { regnNo: "22ug040010", rollNo: "22civil010", programme: "B.Tech", branch: "CIVIL", name: "Pooja Gupta", gender: "Female", email: "pooja.gupta10@example.com" },
  { regnNo: "22ug010011", rollNo: "22cse011", programme: "B.Tech", branch: "CSE", name: "Ankit Yadav", gender: "Male", email: "ankit.yadav11@example.com" },
  { regnNo: "22ug050012", rollNo: "22ece012", programme: "B.Tech", branch: "ECE", name: "Riya Malhotra", gender: "Female", email: "riya.malhotra12@example.com" },
  { regnNo: "22ug020013", rollNo: "22mech013", programme: "B.Tech", branch: "MECH", name: "Siddharth Pillai", gender: "Male", email: "siddharth.pillai13@example.com" },
  { regnNo: "22ug030014", rollNo: "22eee014", programme: "B.Tech", branch: "EEE", name: "Kavya Reddy", gender: "Female", email: "kavya.reddy14@example.com" },
  { regnNo: "22ug010015", rollNo: "22cse015", programme: "B.Tech", branch: "CSE", name: "Harsh Patel", gender: "Male", email: "harsh.patel15@example.com" },
  { regnNo: "22ug040016", rollNo: "22civil016", programme: "B.Tech", branch: "CIVIL", name: "Tanvi Joshi", gender: "Female", email: "tanvi.joshi16@example.com" },
  { regnNo: "22ug050017", rollNo: "22ece017", programme: "B.Tech", branch: "ECE", name: "Manish Ghosh", gender: "Male", email: "manish.ghosh17@example.com" },
  { regnNo: "22ug020018", rollNo: "22mech018", programme: "B.Tech", branch: "MECH", name: "Shreya Das", gender: "Female", email: "shreya.das18@example.com" },
  { regnNo: "22ug010019", rollNo: "22cse019", programme: "B.Tech", branch: "CSE", name: "Aditya Kapoor", gender: "Male", email: "aditya.kapoor19@example.com" },
  { regnNo: "22ug030020", rollNo: "22eee020", programme: "B.Tech", branch: "EEE", name: "Meera Chawla", gender: "Female", email: "meera.chawla20@example.com" }
];

