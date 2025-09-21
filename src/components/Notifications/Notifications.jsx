import React from "react";
import styles from "./Notifications.module.scss";
import Icon from "../Icons/Icons";

const Notifications = () => {
  const notificationsData = [
    {
      content: "You have a bug that needs fix",
      type: "bug",
      time: "Just Now",
    },
    {
      content: "New User Registered",
      type: "registration",
      time: "59 minutes ago",
    },
    {
      content: "You have a bug that needs fix",
      type: "bug",
      time: "Just Now",
    },
    {
      content: "Andi Lane subscribed to you",
      type: "subscribe",
      time: "Today, 11:59 AM",
    },
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case "bug":
        return <Icon name="bug" />;
      case "registration":
        return <Icon name="user" />;
      case "subscribe":
        return <Icon name="podcast" />;
      default:
        return "";
    }
  };

  return (
    <div className={styles.notificationsSection}>
      <h3>Notifications</h3>

      {notificationsData?.map((notification, index) => (
        <div key={`notification-${index}`} className={styles.notificationItem}>
          <div
            className={styles.notificationIcon}
            style={{
              background: index % 2 === 0 ? "#E3F5FF" : "#E5ECF6",
            }}
          >
            {getNotificationIcon(notification?.type)}
          </div>
          <div className={styles.notificationContent}>
            <p>{notification?.content}</p>
            <span className={styles.notificationTime}>
              {notification?.time}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
