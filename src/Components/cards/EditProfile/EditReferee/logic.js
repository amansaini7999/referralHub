import { useState, useEffect } from "react";

const useRefereeData = () => {
  const [referee_data, setReferee_data] = useState({
    full_name: "",
    institute: "",
    branch: "",
    cgpa: 0,
    linkedin: "",
    codechef: "",
    codeforces: "",
    leetcode: "",
    graduating_year: "",
    phone_number: "",
    resume_link: "",
    infotext: "",
  });

  const demoData = {
    full_name: "James",
    institute: "Abc University",
    branch: "Computer Science Engineering",
    cgpa: 9.2,
    linkedin: "https://linkedin.com/in/james",
    codechef: "https://linkedin.com/in/james",
    codeforces: "https://linkedin.com/in/james",
    leetcode: "https://leetcode.com/james",
    resume_link: "https://googledrive.com/jamesresume",
    graduating_year: 2022,
    phone_number: "1234567890",
    infotext: "B.E student",
  };

  function handle(e) {
    const updatedData = { ...referee_data };
    updatedData[e.target.id] = e.target.value;
    setReferee_data(updatedData);
    console.log(updatedData);
  }

  const submit = (e) => {
    e.preventDefault();
    console.log("Data Submitted!");
    console.log(referee_data);
  };

  useEffect(() => {
    setReferee_data(demoData);
  }, []);

  return { referee_data, handle, submit };
};

export default useRefereeData;
