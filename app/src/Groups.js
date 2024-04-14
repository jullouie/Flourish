// Import useState from React
import React, { useState } from 'react';

// GroupsPage component
function GroupsPage() {
  // Sample group data
  const groups = ['Group 1', 'Group 2', 'Group 3']; // Replace with your group data

  // State to track active group
  const [activeGroup, setActiveGroup] = useState(groups[0]); // Initially set to the first group

  return (
    <div className="App">
      <div className="group-page">
        <div className="group-list">
          <h2>Groups</h2>
          <ul>
            {groups.map(group => (
              <li key={group}>
                <button
                  className={activeGroup === group ? 'active' : ''}
                  onClick={() => setActiveGroup(group)}
                >
                  {group}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="group-leaderboard">
          <h2>{activeGroup} Leaderboard</h2>
          {/* Display leaderboard for active group here */}
        </div>
      </div>
    </div>
  );
}

export default GroupsPage;
