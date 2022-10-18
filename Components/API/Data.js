import {
  MdDashboard,
  MdOutlineContactPhone,
  MdLiveHelp,
  MdAddchart,
  MdOutlineComment,
  MdAccountCircle,
  MdChildFriendly,
  MdOutlineShoppingCart,
  MdAnalytics,
} from "react-icons/md";
import { RiCurrencyFill } from "react-icons/ri";

import { BsPeopleFill } from "react-icons/bs";
import Profile from '../../assets/profile.png'

export const DoctorsList=[
{
  name: 'Dr. Sandook Ruit',
  profile: Profile,
  expertise: 'ophthalmologist',
},
{
  name: 'Dr. Robert',
  profile: Profile,
  expertise: 'Gynecologist',
},
{
  name: 'Dr. Brandon',
  profile: Profile,
  expertise: 'Cardiologist',
},
{
  name: 'Dr. Govinda KC',
  profile: Profile,
  expertise: 'Cardiologist',
},

];
export const CardData = [
  {
    name: "Earning",
    icon: <RiCurrencyFill />,
    series: [50],
    value: "500",
  },
  {
    name: "Analytics",
    icon: <MdAnalytics />,
    value: "5500",
    series: [60],
  },
  {
    name: "FAQ",
    icon: <MdOutlineComment />,
    value: "5500",
    series: [70],
  },
  {
    name: "Crews",
    icon: <BsPeopleFill />,
    value: "1100",
    series: [80],
  },
];
export const Sidemenu = [
  {
    name: "Dashboard",
    to: "/",
    icon: <MdDashboard />,
  },
  {
    name: "Analytics",
    to: "/analytics",
    icon: <MdAddchart />,
  },
  {
    name: "Products",
    to: "/sign-in",
    icon: <MdOutlineShoppingCart />,
  },

  {
    name: "Orders",
    to: "/sign-in",
    icon: <MdChildFriendly />,
  },

  {
    name: "Users",
    to: "/users",
    icon: <MdAccountCircle />,
  },
  {
    name: "FAQ",
    to: "/faq",
    icon: <MdOutlineComment />,
  },

  {
    name: "Contact Us",
    to: "/sign-in",
    icon: <MdOutlineContactPhone />,
  },
  {
    name: "About Us",
    to: "/sign-in",
    icon: <MdLiveHelp />,
  },
];

export const tableData = [
  {
    id: 44814,
    url: "http://www.tvmaze.com/shows/44813/the-snow-spider",
    name: "The Snow Spider",
    type: "Scripted",
    language: "English",

    genres: "Drama",
  },
  {
    id: 44815,
    url: "http://www.tvmaze.com/shows/44813/the-snow-spider",
    name: "The Snow Spider",
    type: "Scripted",
    language: "English",
    genres: "Drama",
  },
  {
    id: 41016,
    url: "http://www.tvmaze.com/shows/44813/the-snow-spider",
    name: "The Snow Spider",
    type: "Scripted",
    language: "English",
    genres: "Drama",
  },
  {
    id: 44829,
    url: "http://www.tvmaze.com/shows/44813/the-snow-spider",
    name: "The Snow Spider",
    type: "Scripted",
    language: "English",
    genres: "Drama",
  },
  {
    id: 42800,
    url: "http://www.tvmaze.com/shows/44813/the-snow-spider",
    name: "The Snow Spider",
    type: "Scripted",
    language: "English",
    genres: "Drama",
  },
  {
    id: 44000,
    url: "http://www.tvmaze.com/shows/44813/the-snow-spider",
    name: "The Snow Spider",
    type: "Scripted",
    language: "English",
    genres: "Drama",
  },
  {
    id: 40000,
    url: "http://www.tvmaze.com/shows/44813/the-snow-spider",
    name: "The Snow Spider",
    type: "Scripted",
    language: "English",
    genres: "Drama",
  },
  {
    id: 99999,
    url: "http://www.tvmaze.com/shows/44813/the-snow-spider",
    name: "The Snow Spider",
    type: "Scripted",
    language: "English",
    genres: "Drama",
  },
];
