function GroupLeaderboard({ groupLeaderboard }) {
    return (
      <div>
        <h2>Group Leaderboard</h2>
        <ul>
          {groupLeaderboard.map((group, index) => (
            <li key={index}>
              <span>{group.groupName}</span>
              <span>{group.points} points</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default GroupLeaderboard;