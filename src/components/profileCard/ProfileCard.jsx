import React from "react";

const ProfileCard = ({ name, age }) => {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
    </div>
  );
};

export default ProfileCard;
