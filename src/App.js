import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [form, setForm] = useState({ name: "", age: "", major: "" });
  const [students, setStudents] = useState([]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const addStudent = (e) => {
    e.preventDefault();
    const { name, age, major } = form;

    // simple validation
    if (!name.trim() || !age.trim() || !major.trim()) return;

    setStudents((list) => [...list, { name: name.trim(), age: age.trim(), major: major.trim() }]);
    setForm({ name: "", age: "", major: "" });
  };

  return (
    <div className="page">
      <h1 className="title">Student Information System</h1>

      <p className="subtitle">
        <strong>Developed By:</strong> StudentID || Student Name || DevOps
      </p>

      <form className="form" onSubmit={addStudent}>
        <div className="field">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={onChange}
            type="text"
            placeholder="Enter name"
          />
        </div>

        <div className="field">
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            name="age"
            value={form.age}
            onChange={onChange}
            type="number"
            min="0"
            placeholder="Enter age"
          />
        </div>

        <div className="field">
          <label htmlFor="major">Major:</label>
          <input
            id="major"
            name="major"
            value={form.major}
            onChange={onChange}
            type="text"
            placeholder="Enter major"
          />
        </div>

        <button className="btn" type="submit">Add Student</button>
      </form>

      <h2 className="listTitle">Student List</h2>

      {students.length === 0 ? (
        <p className="empty">No students added yet</p>
      ) : (
        <ul className="list">
          {students.map((s, i) => (
            <li key={i}>
              <span className="itemName">{s.name}</span> — Age: {s.age}, Major: {s.major}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
