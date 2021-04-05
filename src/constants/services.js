import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"

export default [
  {
    id: 1,
    icon: <FaSketch className="service-icon" />,
    title: "API Development",
    text: `I believe that with a great API, both web and mobile app development can happen with far greater ease and efficiency. Although I'm most passionate about Node / JavaScript-based backend development, my professional and project experiences include PHP, C#, and Python.`,
  },
  {
    id: 2,
    icon: <FaCode className="service-icon" />,
    title: "Web Development",
    text: `Look at my resume and you'll see that the bulk of my experience is in Web. These days, I enjoy working in modern JavaScript libraries and frameworks, including React frameworks such as NextJS and Gatsby.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "Mobile App Development",
    text: `When it comes to web development, I give the bulk of my attention to cross-platform development. In particular, I enjoy working in Flutter or React Native.`,
  },
]
