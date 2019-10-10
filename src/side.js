import React from "react";
export default function SideBar(props) {
  return (
    <div>
      <input
        type="text"
        value={props.name}
        onChange={e => {
          props.change({ name: e.target.value });
        }}
        placeholder="search for names"
      />
    </div>
  );
}
