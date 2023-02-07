import NetJets from "./images/netjets-vector-logo.png"
import Accenture from "./images/Accenture-Logo.png"
import eFuse from "./images/efuse.png"
import Dwell from "./images/Dwell_Sunburst_Light.png"

export interface Company {
  name: string;
  time: string;
  src: string;
}

export const employerData: Company[] = [
  {
    name: "eFuse",
    time: "2022-present",
    src: eFuse,
  },
  {
    name: "Dwell",
    time: "2019-present",
    src: Dwell,
  },
  {
    name: "Accenture",
    time: "2019-2022",
    src: Accenture,
  },
  {
    name: "NetJets",
    time: "2018-2019",
    src: NetJets,
  }
];

export interface ReviewData {
  name: string;
  role: string;
  time: string;
  review: string;
}

export const reviewData: ReviewData[] = [
  {
    name: "Julie",
    role: "Delivery Lead",
    time: "June, 2020",
    review: `I've worked with Alex for over a year now on three different teams. Each time I start a new project, l'm excited to see that Alex is on my team. Alex creates his own leadership opportunities on a team by stepping up and jumping right in. He asks the right questions at the right time, to help understand the problem we are trying to solve. Alex proactively does things to help his team, whether it be writing cards in Jira, reaching out to the Product Owner to review an approach or solution or jumping in to help problem solve. Alex has an easy-going personality that helps motivate team members and relieve team stress. We've been on some stressful projects together, but never once did I see Alex give up. Alex should know his teams appreciate him more than he may know and always let his personality shine. I'd work on any team with Alex!`
  },
  {
    name: "Tyler",
    role: "Software Engineer",
    time: "June, 2020",
    review: `I have worked with Alex for over a year on two projects. When pairing with Alex, I appreciate that he is an egoless communicator and team member, is consistent in his approach, and stays focused on delivering value to clients, not just code. He has kept me many times from going down rabbit holes and losing focus on the long-term goal. He also shows care for the quality of the product he is building, especially when it comes to a user's experience on the front-end.
Alex's willingness to take on new tasks was made evident on a recent project when we had to create a 3D model of a physical space using software tools unlike any we had any familiarity with. Alex volunteered for the challenge. and learned and delivered quickly without complaint.
As an artisan. Alex has a knack for helping on the delivery side. I have seen multiple instances where he stepped up to help or stand in for our Delivery Lead, by reviewing and refining story cards, keeping story boards up to date. and tracking sprint metrics. This has helped keep our team organized and moving.`
  },
  {
    name: "Super duper",
    role: "Software Engineer",
    time: "June, 2020",
    review: `I have worked with Alex for over a year delivery side. I have seen multiple instances where he stepped up to help or stand in for our Delivery Lead, by reviewing and refining story cards, keeping story boards up to date. and tracking sprint metrics. This has helped keep our team organized and moving.`
  }
]