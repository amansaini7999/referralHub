import { useState, useEffect } from "react";

const useReferrerData = () => {
  const [referrer_data, setReferrer_data] = useState({
    full_name: "",
    current_company: "",
    work_experience: 0,
    email: "",
    linkedin: "",
    phone_number: "",
    job_role: "",
    leetcode: "",
  });

  const demoData = {
    full_name: "James",
    current_company: "Microsoft",
    work_experience: 2,
    email: "james@gmail.com",
    linkedin: "https://linkedin.com/in/james",
    phone_number: "9000000000",
    job_role: "SDE 2",
    leetcode: "https://leetcode.com/james",
  };

  function handle(e) {
    const updatedData = { ...referrer_data };
    updatedData[e.target.id] = e.target.value;
    setReferrer_data(updatedData);
    console.log(updatedData);
  }

  const submit = (e) => {
    e.preventDefault();
    console.log("Data Submitted!");
    console.log(referrer_data);
  };

  useEffect(() => {
    setReferrer_data(demoData);
  }, []);

  return { referrer_data, handle, submit };
};

export default useReferrerData;
