import { HashlinkModel, Faq, Timeline, Prize } from "../models/models";

import bronze from "../assets/images/bronze_medal.png";
import silver from "../assets/images/silver_medal.png";
import gold from "../assets/images/gold_medal.png";

const hashlinks: HashlinkModel[] = [
  {
    id: 1,
    title: "Timeline",
    url: "timeline",
  },
  {
    id: 2,
    title: "Overview",
    url: "overview",
  },
  {
    id: 3,
    title: "FAQs",
    url: "faq",
  },
  // {
  //   id: 4,
  //   title: "Contact",
  // },
];

const faqData: Faq[] = [
  {
    id: "1",
    question: "Can I work on a project I started before the hackathon?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Vel orci porta non pulvinar neque.",
  },
  {
    id: "2",
    question: "What happens if I need help during the hackathon?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Vel orci porta non pulvinar neque.",
  },
  {
    id: "3",
    question: "What happens if I don't have an idea for a project?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Vel orci porta non pulvinar neque.",
  },
  {
    id: "4",
    question: "Can I join a team or do I have to come with one?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Vel orci porta non pulvinar neque.",
  },
  {
    id: "5",
    question: "What happens after the hackathon ends",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Vel orci porta non pulvinar neque.",
  },
  {
    id: "6",
    question: "Can I work on a project I started before the hackathon?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Vel orci porta non pulvinar neque.",
  },
];

const timelineData: Timeline[] = [
  {
    id: 1,
    title: "Hackathon Announcement",
    description:
      "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
    date: "November 18, 2023",
    alternate: false,
  },
  {
    id: 2,
    title: "Teams Registration begins",
    description:
      "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
    date: "November 18, 2023",
    alternate: true,
  },
  {
    id: 3,
    title: "Teams Registration ends",
    description: "Interested Participants are no longer Allowed to register",
    date: "November 18, 2023",
    alternate: false,
  },
  {
    id: 4,
    title: "Announcement of the accepted teams and ideas",
    description:
      "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
    date: "November 18, 2023",
    alternate: true,
  },
  {
    id: 5,
    title: "Getlinked Hackathon 1.0 Offically Begins",
    description:
      "Accepted teams can now proceed to build their ground breaking skill driven solutions",
    date: "November 18, 2023",
    alternate: false,
  },
  {
    id: 6,
    title: "Demo Day",
    description:
      "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
    date: "November 18, 2023",
    alternate: true,
  },
];

const prizeData: Prize[] = [
  {
    id: 1,
    position: "2nd",
    prize: "N300,000",
    imgUrl: silver,
  },
  {
    id: 2,
    position: "1st",
    prize: "N500,000",
    imgUrl: gold,
  },
  {
    id: 3,
    position: "3rd",
    prize: "N150,000",
    imgUrl: bronze,
  },
];

export { hashlinks, faqData, timelineData, prizeData };
