import React from "react";

export default function TeamForm(props) {
  const { values, update, submit } = props;

  const onChange = (evt) => {
    // 🔥 STEP 6 - IMPLEMENT the change handler for our inputs and dropdown
    // a) pull the name of the input from the event object
    // b) pull the value of the input from the event object
    // c) use the `update` callback coming in through props
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    // 🔥 STEP 7 - IMPLEMENT the submit handler
    // a) don't allow the browser to reload!
    // c) use the `submit` callback coming in through props
    evt.preventDefault();
    submit();
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group inputs">
        <label htmlFor="name">
          Name
          {/* 🔥 STEP 3 - Make an input of type `text` for username.
            Controlled inputs need `value` and `onChange` props.
            Inputs render what they're told - their current value comes from app state.
            At each keystroke, a change handler fires to change app state. */}
          <input
            id="name"
            type="text"
            name="name"
            onChange={onChange}
            value={values.name}
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            id="email"
            type="text"
            name="email"
            onChange={onChange}
            value={values.email}
          />
        </label>

        <label htmlFor="role">
          Role
          <select id="role" name="role" onChange={onChange} value={values.role}>
            <option value="">***Select a Role***</option>
            <option value="Lord of The Cord">Lord of The Cord</option>
            <option value="Knight of The Cord">Knight of The Cord</option>
            <option value="Student of The Cord">Student of The Cord</option>
          </select>
        </label>
        <div className="submit">
          <button>submit</button>
        </div>
      </div>
    </form>
  );
}
