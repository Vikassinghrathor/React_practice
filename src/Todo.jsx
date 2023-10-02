import React, { useState } from 'react';

const Todo = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  function addActivity() {
    if (activity.trim() !== "") { // Check if activity is not empty or just whitespace
      setListData([...listData, activity]);
      setActivity('');
    }
  }

  return (
    <>
      <div>TODO LIST</div>
      <input type='text' placeholder='Add Activity' value={activity} onChange={(e) => setActivity(e.target.value)} />
      <button onClick={addActivity}>Add</button>
      <p>Here is your List : </p>
      {listData.length > 0 && listData.map((data, i) => (
        <p key={i}>
          <div>{data}</div>
        </p>
      ))}
    </>
  )
}

export default Todo;
