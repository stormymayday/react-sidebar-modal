import { IconType } from "react-icons";
import {
    FaBehance,
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaSketch,
    FaHome,
    FaUserFriends,
    FaFolderOpen,
    FaCalendarAlt,
    FaWpforms,
} from "react-icons/fa";

interface Link {
    id: number;
    url: string;
    text: string;
    icon: IconType;
}

export const links: Link[] = [
    {
        id: 1,
        url: "/",
        text: "home",
        icon: FaHome,
    },
    {
        id: 2,
        url: "/team",
        text: "team",
        icon: FaUserFriends,
    },
    {
        id: 3,
        url: "/projects",
        text: "projects",
        icon: FaFolderOpen,
    },
    {
        id: 4,
        url: "/calendar",
        text: "calendar",
        icon: FaCalendarAlt,
    },
    {
        id: 5,
        url: "/documents",
        text: "documents",
        icon: FaWpforms,
    },
];

interface SocialLink {
    id: number;
    url: string;
    icon: IconType;
}
export const social: SocialLink[] = [
    {
        id: 1,
        url: "https://www.twitter.com",
        icon: FaFacebook,
    },
    {
        id: 2,
        url: "https://www.twitter.com",
        icon: FaTwitter,
    },
    {
        id: 3,
        url: "https://www.twitter.com",
        icon: FaLinkedin,
    },
    {
        id: 4,
        url: "https://www.twitter.com",
        icon: FaBehance,
    },
    {
        id: 5,
        url: "https://www.twitter.com",
        icon: FaSketch,
    },
];
