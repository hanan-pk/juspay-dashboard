import React from "react";
import styles from "./Contacts.module.scss";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { User } from "@heroui/user";
import { Button } from "@heroui/button";

const Contacts = () => {
  const contacts = [
    {
      name: "Natali Craig",
      avatar:
        "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/yaNW23Vj5w.png",
    },
    {
      name: "Drew Cano",
      avatar:
        "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/w3D70fQyDK.png",
    },
    {
      name: "Orlando Diggs",
      avatar:
        "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/VLt0y0ziK6.png",
    },
    {
      name: "Andi Lane",
      avatar:
        "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/AOp0uKYvJJ.png",
    },
    {
      name: "Kate Morrison",
      avatar:
        "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/mgXiGQXWuq.png",
    },
    {
      name: "Koray Okumus",
      avatar:
        "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-21/crdaGCL1AF.png",
    },
  ];

  return (
    <div className={styles.contactsSection || "contacts-section"}>
      <h3>Contacts</h3>
      {contacts.map((contact, index) => (
        <Popover placement="right">
          <PopoverTrigger>
            <div key={index} className={styles.contactItem || "contact-item"}>
              <img
                src={contact.avatar}
                alt={contact.name}
                className={styles.contactAvatar || "contact-avatar"}
              />
              <span>{contact.name}</span>
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <div className="p-2 flex items-center">
              <User
                avatarProps={{
                  src: contact.avatar,
                }}
                description="Available"
                name={contact?.name}
              />
              <Button variant="flat" color="success" className="ml-6">
                Contact
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
};

export default Contacts;
