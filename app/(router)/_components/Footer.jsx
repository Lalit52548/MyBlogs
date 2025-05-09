import { getAllPosts } from "@/app/redux/PostSlice";
import { useToast } from "@/components/ui/use-toast";
import React, { useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaFacebook,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {
  const { toast } = useToast();
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.category);
  const { categoryId } = useSelector((state) => state.post);

  const handleFilter = (event) => {
    console.log(
      "Filter by:",
      event.target.attributes.itemid?.value ?? undefined
    );
    dispatch(
      getAllPosts({
        categoryId: event.target.attributes.itemid?.value ?? undefined,
      })
    );
  };

  return (
    <footer className="dark:bg-black bg-gray-100 text-gray-700 dark:text-gray-100 p-4 text-center">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* Sections */}
        <div style={{ flex: "1 1 200px", margin: "10px" }}>
          <h2>
            <b>
              <u>SECTIONS</u>
            </b>
          </h2>
          <ul>
            {/* Latest Updates for Sections list which works similar */}
            {categories.map((category) => (
              <li
                key={category.id}
                itemID={category.id}
                className={`hover:cursor-pointer ${
                  categoryId === category.id && "underline"
                }`}
                onClick={handleFilter}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div style={{ flex: "1 1 200px", margin: "10px" }}>
          <h2>Explore the Gazette</h2>
          <ul>
            <li>Events</li>
            <li>Article archive</li>
            <li>About us</li>
            <li>News+</li>
            <li>Podcast</li>
          </ul>
        </div>

        {/* Series */}
        <div style={{ flex: "1 1 300px", margin: "10px" }}>
          <h2>
            <span role="img" aria-label="book">
              📖
            </span>{" "}
            Our recent series
          </h2>
          <div style={{ marginTop: "10px" }}>
            <h3>Wondering</h3>
            <p>A series of random questions answered by BlogNest experts.</p>
          </div>
          <div style={{ marginTop: "10px" }}>
            <h3>Life | Work</h3>
            <p>
              A series focused on the personal side of BlogNest research and
              teaching.
            </p>
          </div>
        </div>
        <div
          style={{
            flex: "1 1 200px",
            margin: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "column", // Ensures the heading and list are stacked vertically
          }}
        >
          <h2>Follow us on</h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex", // Makes the list items align horizontally
              gap: "20px", // Adds spacing between the items
              alignItems: "center", // Aligns items vertically in the center
            }}
          >
            {social_media_handle.map((sm) => (
              <li
                key={sm.name.toLowerCase()}
                className="hover:bg-primary/10 px-2 py-1 rounded hover:underline hover:bold"
                onClick={() => {
                  if (sm.fn === "open") {
                    window.open(sm.url, "_blank");
                  }
                  if (sm.fn === "copy") {
                    if (typeof window?.copy === "function") {
                      window.copy(sm.url);
                      toast({
                        description: sm.copyMessage,
                        variant: "default",
                      });
                      return;
                    }
                    if (
                      typeof window.navigator?.clipboard.writeText ===
                      "function"
                    ) {
                      window.navigator.clipboard.writeText(sm.email);
                      toast({
                        description: sm.copyMessage,
                        variant: "default",
                      });
                      return;
                    }

                    window.open(sm.url, "_blank");
                  }
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <sm.icon /> {sm.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} Blognest. All rights reserved.</p>
    </footer>
  );
};

// My Social Media Handles
const social_media_handle = [
  {
    icon: FaInstagram,
    name: "Instagram",
    url: "https://www.instagram.com/sanyuktaajoshi?igsh=dGVtbXhudTkyMXh6&utm_source=qr",
    fn: "open",
  },
  {
    icon: FaYoutube,
    name: "YouTube",
    url: "https://youtube.com/@sanyuktajoshi7376?si=9PwTtcHF49BY4owK",
    fn: "open",
  },
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sanyuktaa02?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    fn: "open",
  },
  {
    icon: FaFacebook,
    name: "Facebook",
    url: "https://www.facebook.com/share/1EGTi82dWw/?mibextid=wwXIfr",
    fn: "open",
  },
  {
    icon: FaEnvelope,
    name: "Email",
    url: "mailto:Sanyuktajoshi28@gmail.com",
    email: "Sanyuktajoshi28@gmail.com",
    fn: "copy",
    copyMessage: "Email has been copied to clipboard",
  },
];

export default Footer;
