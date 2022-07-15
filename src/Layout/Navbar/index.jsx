import React from "react";
import { NAVBAR_PAGES } from "../../data";
import { NavItem } from "./NavItem";
import "./styles.css";

const { aboutUs, contact, posts } = NAVBAR_PAGES;

export const Navbar = () => {
  return (
    <nav className="navigation_bar_layout">
      <ul className="navigation_list">
        <NavItem label={aboutUs.label} link={aboutUs.link} />
        <NavItem label={contact.label} link={contact.link} />
        <NavItem label={posts.label} link={posts.link} />
      </ul>
    </nav>
  );
};
