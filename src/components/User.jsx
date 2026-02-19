import "../stylesheets/user.css";

import { ProfileCard } from "./ProfileCard";
import { ActivityCard } from "./ActivityCard";

const activities = [
  { category: "work",     icon: "📞", title: "Work",      hours: 32, prevHours: 36 },
  { category: "play",     icon: "🎮", title: "Play",      hours: 10, prevHours: 8  },
  { category: "study",    icon: "📚", title: "Study",     hours: 4,  prevHours: 7  },
  { category: "exercise", icon: "🏃", title: "Exercise",  hours: 4,  prevHours: 5  },
  { category: "social",   icon: "👥", title: "Social",    hours: 5,  prevHours: 10 },
  { category: "selfcare", icon: "🧘", title: "Self Care", hours: 2,  prevHours: 2  },
];

const periods = ["Daily", "Weekly", "Monthly"];

export const User = () => {
  return (
    <div className="dashboard">
      <div className="grid">

        <ProfileCard
          name="Jeremy Robson"
          periods={periods}
          activePeriod="Weekly"
        />

        {activities.map((activity) => (
          <ActivityCard key={activity.category} {...activity} />
        ))}

      </div>
    </div>
  );
};