import { Accordion, AccordionItem } from "@heroui/accordion";
import { FaIdBadge } from "react-icons/fa";
import { useState } from "react";
import SideBarHeader from "./SideBarHeader/SideBarHeader";
import styles from "./SideBar.module.scss";
import Icon from "../Icons/Icons";
import { useNavigate, useLocation } from "react-router-dom";
import { useSideBar } from "../../hooks/useSideBar";

const Sidebar = () => {
  const {
    openItems,
    isActive,
    handleNavigate,
    isParentActive,
    handleSelectionChange,
  } = useSideBar();

  const LeftIndicator = ({ itemKey, isAccordion = true, activePaths = [] }) => {
    const isOpen = openItems.has(itemKey);
    if (isAccordion) {
      return (
        <div className="w-4 flex justify-center">
          <svg
            className={`w-3 h-3 transition-transform duration-200 text-gray-400 ${
              isOpen ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      );
    } else {
      return <div className="w-4"></div>;
    }
  };

  return (
    <div className={styles.sidebar}>
      <SideBarHeader />
      <div>
        <h3 className="text-gray-400 text-sm mb-2">Dashboards</h3>

        <div
          className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer relative mb-2 ${
            isActive("/default") ? "bg-gray-100" : ""
          }`}
          onClick={() => handleNavigate("/default")}
        >
          {/* Left border indicator */}
          {isActive("/default") && (
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-black rounded-full"></div>
          )}
          <LeftIndicator isAccordion={false} activePaths={["/default"]} />
          <Icon name="pie_chart" />
          <span>Default</span>
        </div>

        <Accordion
          selectionMode="multiple"
          showDivider={false}
          selectedKeys={openItems}
          onSelectionChange={handleSelectionChange}
          className="!px-0 space-y-2"
          itemClasses={{
            base: "!px-0 mb-2",
            trigger: "!px-0 py-0 hover:bg-transparent",
            content: "!px-0 pt-0 pb-2",
          }}
        >
          <AccordionItem
            key="eCommerce"
            aria-label="eCommerce"
            hideIndicator={true}
            title={
              <div
                className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 w-full relative ${
                  isParentActive(["/ecommerce"]) ? "bg-gray-100" : ""
                }`}
              >
                {isParentActive(["/ecommerce"]) && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-black rounded-full"></div>
                )}
                <LeftIndicator
                  itemKey="eCommerce"
                  activePaths={["/ecommerce"]}
                />
                <Icon name="bag" />
                <span>eCommerce</span>
              </div>
            }
          >
            <ul className="flex flex-col gap-1 pl-7 ml-3">
              <li
                className={`cursor-pointer hover:text-black p-2 rounded-lg ${
                  isActive("/ecommerce/overview")
                    ? "text-black font-medium"
                    : ""
                }`}
                onClick={() => handleNavigate("/ecommerce/overview")}
              >
                Overview
              </li>
              <li
                className={`cursor-pointer hover:text-black p-2 rounded-lg ${
                  isActive("/ecommerce/analytics")
                    ? "text-black font-medium"
                    : ""
                }`}
                onClick={() => handleNavigate("/ecommerce/analytics")}
              >
                Analytics
              </li>
            </ul>
          </AccordionItem>

          <AccordionItem
            key="projects"
            aria-label="Projects"
            hideIndicator={true}
            title={
              <div
                className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 w-full relative ${
                  isParentActive(["/projects"]) ? "bg-gray-100" : ""
                }`}
              >
                {isParentActive(["/projects"]) && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-black rounded-full"></div>
                )}
                <LeftIndicator itemKey="projects" activePaths={["/projects"]} />
                <Icon name="folder" />
                <span>Projects</span>
              </div>
            }
          >
            <ul className="flex flex-col gap-1 pl-7 ml-3">
              <li
                className="cursor-pointer hover:text-black p-2 rounded-lg"
                onClick={() => handleNavigate("/projects/1")}
              >
                Project 1
              </li>
              <li
                className="cursor-pointer hover:text-black p-2 rounded-lg"
                onClick={() => handleNavigate("/projects/2")}
              >
                Project 2
              </li>
            </ul>
          </AccordionItem>

          <AccordionItem
            key="onlineCourses"
            aria-label="Online Courses"
            hideIndicator={true}
            title={
              <div
                className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 w-full relative ${
                  isParentActive(["/courses"]) ? "bg-gray-100" : ""
                }`}
              >
                {isParentActive(["/courses"]) && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-black rounded-full"></div>
                )}
                <LeftIndicator
                  itemKey="onlineCourses"
                  activePaths={["/courses"]}
                />
                <Icon name="book" />
                <span>Online Courses</span>
              </div>
            }
          >
            <ul className="flex flex-col gap-1 pl-7 ml-3">
              <li
                className="cursor-pointer hover:text-black p-2 rounded-lg"
                onClick={() => handleNavigate("/courses/1")}
              >
                Course 1
              </li>
              <li
                className="cursor-pointer hover:text-black p-2 rounded-lg"
                onClick={() => handleNavigate("/courses/2")}
              >
                Course 2
              </li>
            </ul>
          </AccordionItem>
        </Accordion>

        <h3 className="text-gray-400 text-sm mt-6 mb-2">Pages</h3>
        <Accordion
          selectionMode="multiple"
          className="border-none !px-0 space-y-2"
          showDivider={false}
          selectedKeys={openItems}
          onSelectionChange={handleSelectionChange}
          itemClasses={{
            base: "p-0 border-b-0 !px-0 mb-2",
            trigger: "!px-0 py-0 hover:bg-transparent",
            content: "!px-0 pt-0 pb-2",
          }}
        >
          <AccordionItem
            key="userProfile"
            aria-label="User Profile"
            hideIndicator={true}
            title={
              <div
                className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 w-full relative ${
                  isParentActive(["/user"]) ? "bg-gray-100" : ""
                }`}
              >
                {isParentActive(["/user"]) && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-black rounded-full"></div>
                )}
                <LeftIndicator itemKey="userProfile" activePaths={["/user"]} />
                <Icon name="user_profile" />
                <span>User Profile</span>
              </div>
            }
          >
            <ul className="flex flex-col gap-1 pl-7 ml-3">
              <li
                className="cursor-pointer hover:text-black p-2 rounded-lg"
                onClick={() => handleNavigate("/user/overview")}
              >
                Overview
              </li>
              <li
                className="cursor-pointer hover:text-black p-2 rounded-lg"
                onClick={() => handleNavigate("/user/projects")}
              >
                Projects
              </li>
              <li
                className="cursor-pointer hover:text-black p-2 rounded-lg"
                onClick={() => handleNavigate("/user/compaigns")}
              >
                Compaigns
              </li>
              <li
                className="cursor-pointer hover:text-black p-2 rounded-lg"
                onClick={() => handleNavigate("/user/documents")}
              >
                Documents
              </li>
              <li
                className="cursor-pointer hover:text-black p-2 rounded-lg"
                onClick={() => handleNavigate("/user/followers")}
              >
                Followers
              </li>
            </ul>
          </AccordionItem>

          <AccordionItem
            key="account"
            aria-label="Account"
            hideIndicator={true}
            title={
              <div
                className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 w-full relative ${
                  isParentActive(["/account"]) ? "bg-gray-100" : ""
                }`}
              >
                {isParentActive(["/account"]) && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-black rounded-full"></div>
                )}
                <LeftIndicator itemKey="account" activePaths={["/account"]} />
                <Icon name="account" />
                <span>Account</span>
              </div>
            }
          >
            <ul className="flex flex-col gap-1 pl-7 ml-3">
              <li
                className="cursor-pointer hover:text-black p-2 rounded-lg"
                onClick={() => handleNavigate("/account/settings")}
              >
                Account Settings
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="corporate"
            aria-label="Corporate"
            hideIndicator={true}
            title={
              <div
                className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 w-full relative ${
                  isParentActive(["/account"]) ? "bg-gray-100" : ""
                }`}
              >
                {isParentActive(["/account"]) && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-black rounded-full"></div>
                )}
                <LeftIndicator itemKey="account" activePaths={["/account"]} />
                <Icon name="people" />
                <span>Corporate</span>
              </div>
            }
          >
            <ul className="flex flex-col gap-1 pl-7 ml-3">
              <li
                className="cursor-pointer hover:text-black p-2 rounded-lg"
                onClick={() => handleNavigate("/account/settings")}
              >
                Corporate Settings
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="blog"
            aria-label="Blog"
            hideIndicator={true}
            title={
              <div
                className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 w-full relative ${
                  isParentActive(["/account"]) ? "bg-gray-100" : ""
                }`}
              >
                {isParentActive(["/account"]) && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-black rounded-full"></div>
                )}
                <LeftIndicator itemKey="account" activePaths={["/account"]} />
                <Icon name="blog" />
                <span>Blog</span>
              </div>
            }
          >
            <ul className="flex flex-col gap-1 pl-7 ml-3">
              <li
                className="cursor-pointer hover:text-black p-2 rounded-lg"
                onClick={() => handleNavigate("/account/settings")}
              >
                Blog Page
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="social"
            aria-label="Social"
            hideIndicator={true}
            title={
              <div
                className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 w-full relative ${
                  isParentActive(["/account"]) ? "bg-gray-100" : ""
                }`}
              >
                {isParentActive(["/account"]) && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-black rounded-full"></div>
                )}
                <LeftIndicator itemKey="account" activePaths={["/account"]} />
                <Icon name="social" />
                <span>Social</span>
              </div>
            }
          >
            <ul className="flex flex-col gap-1 pl-7 ml-3">
              <li
                className="cursor-pointer hover:text-black p-2 rounded-lg"
                onClick={() => handleNavigate("/account/settings")}
              >
                Blog Page
              </li>
            </ul>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Sidebar;
