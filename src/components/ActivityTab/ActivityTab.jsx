import React from "react";
import styles from "./ActivityTab.module.scss";
import Icon from "../Icons/Icons";
import Notifications from "../Notifications/Notifications";
import Activities from "../Activities/Activities";
import Contacts from "../Contacts/Contacts";

const ActivityTab = () => {
  return (
    <aside className={styles.rightSidebar}>
      <Notifications />
      <Activities />
      <Contacts />
    </aside>
  );
};

export default ActivityTab;
