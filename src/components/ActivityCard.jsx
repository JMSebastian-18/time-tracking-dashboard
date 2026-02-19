import "../stylesheets/user.css"

export const ActivityCard = ({ category, icon, title, hours, prevHours }) => {

  return (
    <div className="card" data-cat={category}>
      <div className="card-accent">
        <span className="icon">{icon}</span>
      </div>
      <div className="card-body">
        <div className="card-header">
          <span className="card-title">{title}</span>
          <span className="dots">···</span>
        </div>
        <div className="card-hours">{hours}hrs</div>
        <div className="card-prev">Last Week – {prevHours}hrs</div>
      </div>
    </div>
  );
};