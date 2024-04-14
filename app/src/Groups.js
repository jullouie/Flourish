import React, { useState } from 'react';
import './Groups.css'

function GroupsPage() {
  // State to manage the active group
  const [activeGroup, setActiveGroup] = useState('Group 1');

  // Function to handle click events on group buttons
  const handleGroupClick = (groupName) => {
    setActiveGroup(groupName);
  };

  return (
    <div className="group-page">
      <div className="group-list">
        <h2>Groups</h2>
        <ul>
          <li>
            <button
              className={activeGroup === 'Group 1' ? 'active' : ''}
              onClick={() => handleGroupClick('Group 1')}
            >
              Group 1
            </button>
          </li>
          <li>
            <button
              className={activeGroup === 'Group 2' ? 'active' : ''}
              onClick={() => handleGroupClick('Group 2')}
            >
              Group 2
            </button>
          </li>
          {/* Add more groups as needed */}
        </ul>
      </div>
      <div className="group-leaderboard">
        <h2>{activeGroup} Leaderboard</h2>
        <ul>
          {/* Render leaderboard data based on the activeGroup */}
          {activeGroup === 'Group 1' && (
            <>
              <li>Alex +2 drank water</li>
              <li>Bob -2 threw up</li>
              <li>Anna +5 ate a snack</li>
              {/* Add more entries for Group 1 */}
            </>
          )}
          {activeGroup === 'Group 2' && (
            <>
              <li>John +3 ran 5 miles</li>
              <li>Sarah -1 missed workout</li>
              {/* Add more entries for Group 2 */}
            </>
          )}
          {/* Add more conditions for other groups */}
        </ul>
      </div>
    </div>
  );
}

export default GroupsPage;
