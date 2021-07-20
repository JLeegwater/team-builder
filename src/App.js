import logo from "./logo.svg";
import "./App.css";
import TeamForm from "./TeamForm";
import React, { useState, useEffect } from "react";

const teamList = [
  { name: "Andrew", email: "Andrew@boy.com", role: "helper" },
  { name: "Bunny", email: "Bunny@boy.com", role: "question Master" },
  { name: "Jesse", email: "Jesse@boy.com", role: "Lord of the cord" },
];

const initialFormValues = { name: "", email: "", role: "" };

function App() {
  const [team, setTeam] = useState(teamList);

  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    // 🔥 STEP 8 - IMPLEMENT a "form state updater" which will be used inside the inputs' `onChange` handler
    //  It takes in the name of an input and its value, and updates `formValues`
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    };
    console.log(newMember);

    if (!newMember.name || !newMember.email || !newMember.role) return;
    // setTeam(team.push(newMember));
    console.log(team);
    setFormValues(initialFormValues);
  };

  return (
    <div className="App">
      <h1>Form App</h1>

      <TeamForm
        // 🔥 STEP 2 - The form component needs its props.
        //  Check implementation of FriendForm
        //  to see what props it expects.
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {team.map((member) => {
        return (
          <div>
            <h2>Name: {member.name} </h2>
            <p>Email: {member.email}</p>
            <p>Roll: {member.role}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
