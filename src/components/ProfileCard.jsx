import "../stylesheets/user.css"

export const ProfileCard = ({ name,imagen, periods, activePeriod }) => {
    
  return (
    <div className="profile-card">
      <div className="avatar"><img src="../public/image-jeremy.png" width={60} alt="" /></div>
      <p className="report-label">Report for</p>
      <h2 className="profile-name">{name}</h2>
      <div className="period-list">
        {periods.map((period) => (
          <span key={period} className={period === activePeriod ? "active" : ""}>
            {period}
          </span>
        ))}
      </div>
    </div>
  );
};