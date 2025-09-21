import { useState } from "react";
import styles from "./SideBarHeader.module.scss";
import Icon from "../../Icons/Icons";
import { useNavigate } from "react-router-dom";
import { useSideBar } from "../../../hooks/useSideBar";

const SideBarHeader = () => {
  const { activeTab, tabLists, setActiveTab, handleNavigate } = useSideBar();
  console.log(tabLists[activeTab]);
  return (
    <div className={styles.sidebarHeader}>
      <div className={styles.nameBadge}>
        <div className={styles.iconText}>
          <img
            src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/zN6aNKy8Cr.png"
            alt="ByeWind"
            className={styles.brandIcon}
          />
          <span className={styles.brandText}>ByeWind</span>
        </div>
      </div>
      <ul className={styles.tabs}>
        <li
          className={activeTab === "Favorites" ? styles.active : ""}
          onClick={() => setActiveTab("Favorites")}
        >
          Favorites
        </li>
        <li
          className={activeTab === "Recently" ? styles.active : ""}
          onClick={() => setActiveTab("Recently")}
        >
          Recently
        </li>
      </ul>
      {tabLists[activeTab]?.map((item) => (
        <div className={styles.listItems}>
          <span onClick={() => handleNavigate(item.path)}>
            <small>
              {" "}
              <Icon name={"dot"} />
            </small>
            {item?.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SideBarHeader;
