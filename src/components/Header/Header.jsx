import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { useEffect, useRef } from "react";
import Icon from "../Icons/Icons";
import styles from "./Header.module.scss";

const ShortcutKey = () => (
  <div className="flex items-center opacity-30">
    <span className="w-[17px] flex items-center">
      <Icon name="command" />
    </span>
    <span className="text-md">/</span>
  </div>
);

const Header = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.altKey) && e.key === "/") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles["header-left"]}>
        <div className={styles["header-controls"]}>
          <Button isIconOnly className={styles["header-btn"]}>
            <Icon name="sidebar" />
          </Button>
          <Button isIconOnly className={styles["header-btn"]}>
            <Icon name="star" />
          </Button>
        </div>

        <div className={styles.breadcrumb}>
          <span className={styles["breadcrumb-item"]}>Dashboards</span>
          <small className={styles["breadcrumb-separator"]}>/</small>
          <span className={`${styles["breadcrumb-item"]} ${styles.active}`}>
            Default
          </span>
        </div>
      </div>

      <div className={styles["header-right"]}>
        <Input
          ref={inputRef}
          type="text"
          variant={"flat"}
          placeholder="Search"
          startContent={<Icon name="search" />}
          endContent={<ShortcutKey />}
        />

        <div className={styles["header-actions"]}>
          <Button isIconOnly className={styles["header-btn"]}>
            <Icon name="sun" />
          </Button>
          <Button isIconOnly className={styles["header-btn"]}>
            <Icon name="count_down" />
          </Button>
          <Button isIconOnly className={styles["header-btn"]}>
            <Icon name="bell" />
          </Button>
          <Button isIconOnly className={styles["header-btn"]}>
            <Icon name="sidebar" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
