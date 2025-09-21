import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useSideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Favorites");
  const [openItems, setOpenItems] = useState(new Set());

  const [tabLists, setTabLists] = useState({
    Favorites: [
      { title: "Overview", path: "user/overview" },
      { title: "Projects", path: "user/projects" },
    ],
    Recently: [{ title: "Overview", path: "user/overview" }],
  });

  const handleNavigate = (path) => {
    navigate(path);
  };
  const handleHeaderMenuTab = (tab) => {
    setActiveTab(tab);
    handleNavigate();
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleSelectionChange = (keys) => {
    setOpenItems(new Set(keys));
  };

  const isParentActive = (paths) => {
    return paths.some((path) => location.pathname.startsWith(path));
  };

  return {
    location,
    activeTab,
    tabLists,
    openItems,
    isActive,
    setOpenItems,
    setActiveTab,
    isParentActive,
    handleNavigate,
    handleHeaderMenuTab,
    handleSelectionChange,
  };
};
