import React from 'react';

import { IoBarChartSharp } from 'react-icons/io5';
import { HiViewGridAdd } from "react-icons/hi";
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';
import { MdOutlineQueryStats } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { TbDatabase } from "react-icons/tb";

const links = [
  {
    text: "add job",
    path: ".",
    icon: <HiViewGridAdd />,
  },
  {
    text: "all jobs",
    path: "all-jobs",
    icon: <TbDatabase />,
  },
  {
    text: "stats",
    path: "stats",
    icon: <MdOutlineQueryStats />,
  },
  {
    text: "profile",
    path: "profile",
    icon: <ImProfile />,
  },
  {
    text: "admin",
    path: "admin",
    icon: <RiAdminLine />,
  },
];

export default links;
