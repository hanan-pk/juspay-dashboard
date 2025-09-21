import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { User } from "@heroui/user";
import styles from "./Activities.module.scss";
import { Button } from "@heroui/button";

const Activities = () => {
  const activities = [
    {
      avatar:
        "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/Wmid5B1w6W.png",
      content: "You have a bug that needs to be fixed.",
      time: "Just now",
    },
    {
      avatar:
        "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/HZst1UYQz5.png",
      content: "Released a new version",
      time: "59 minutes ago",
    },
    {
      avatar:
        "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/qoUyPAuNkC.png",
      content: "Submitted a bug",
      time: "12 hours ago",
    },
    {
      avatar:
        "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/tZC48YuFam.png",
      content: "Modified A data in Page X",
      time: "Today, 11:59 AM",
    },
    {
      avatar:
        "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/hNpiSbFyKc.png",
      content: "Deleted a page in Project X",
      time: "Feb 2, 2023",
    },
  ];

  return (
    <div className={styles.activitiesSection}>
      <h3>Activities</h3>
      <div className={styles.activityTimeline}>
        <div className={styles.timelineLine}></div>
        {activities.map((activity, index) => (
          <Popover placement="right">
            <PopoverTrigger>
              <div key={`activity-${index}`} className={styles.activityItem}>
                <div
                  className={`${styles.avatar} ${
                    index !== activities.length - 1 ? styles.avatarTimeLine : ""
                  }`}
                >
                  <img
                    src={activity.avatar}
                    alt="User"
                    className={styles.activityAvatar}
                  />
                </div>
                <div className={styles.activityContent}>
                  <p>{activity.content}</p>
                  <span className={styles.activityTime}>{activity.time}</span>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <div className="p-2 flex flex-col">
                <User
                  avatarProps={{
                    src: activity.avatar,
                  }}
                  description={activity.time}
                  name={activity.content}
                />
                <Button className="mt-4">View Details</Button>
              </div>
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </div>
  );
};

export default Activities;
