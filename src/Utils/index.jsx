import * as Icons from 'react-icons/md';
import * as Icons2 from 'react-icons/bs';
import * as Icons3 from 'react-icons/fa';
const dataOfSideBarTab = [
  {
    id: 1,
    name: 'New',
    icon: <Icons3.FaHome />,
  },
  {
    id: 2,
    name: 'Music',
    icon: <Icons.MdMusicVideo />,
  },
  {
    id: 3,
    name: 'Film',
    icon: <Icons2.BsFilm />,
  },
  {
    id: 4,
    name: 'Sport',
    icon: <Icons.MdSports />,
  },
  {
    id: 5,
    name: 'Game',
    icon: <Icons.MdGames />,
  },
  {
    id: 6,
    name: 'Bootstrap',
    icon: <Icons2.BsBootstrap />,
  },
  {
    id: 9,
    name: 'React',
    icon: <Icons3.FaReact />,
  },
  {
    id: 10,
    name: 'Javascript',
    icon: <Icons3.FaJs />,
  },
  {
    id: 11,
    name: 'Figma',
    icon: <Icons3.FaFigma />,
  },
  {
    id: 12,
    name: 'Football',
    icon: <Icons3.FaFootballBall />,
  },
  {
    id: 13,
    name: 'Java',
    icon: <Icons3.FaJava />,
  },
  {
    id: 14,
    name: 'Python',
    icon: <Icons3.FaPython />,
  },
];

const SettingVideoGrid = {
  videoListHomePage: {
    container: { spacing: 3 },
    item: {
      xl: 3,
      md: 4,
      sm: 6,
      xs: 12,
    },
  },
  videoListChannelDetailPage: {},
  videoListVideoDetailPage: {},
};

const Logo = <Icons2.BsYoutube fontSize={'1.8rem'} />;
const IconSearch = <Icons2.BsSearch />;
const IconMenu = <Icons.MdMenu fontSize={'1.8rem'} />;
const IconClose = <Icons.MdClose />;
const IconNotification = <Icons.MdNotifications />;
const IconFavorite = <Icons.MdFavorite />;
const IconChecked = <Icons.MdCheck />;
const IconLike = <Icons2.BsHandThumbsUp />;
const IconDislike = <Icons2.BsHandThumbsDown />;
const IconShare = <Icons.MdShare />;
const IconDropDown = <Icons.MdArrowDropDown />;
const IconDropUp = <Icons.MdArrowDropUp />;
const IconComment = <Icons.MdComment />;
const IconDarkMode = <Icons.MdDarkMode fontSize={'1.8rem'} />;
const IconLightMode = <Icons.MdLightMode fontSize={'1.8rem'} />;
const SourceProfile =
  'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
export {
  IconDarkMode,
  IconLightMode,
  dataOfSideBarTab,
  IconComment,
  IconDropDown,
  IconDropUp,
  IconFavorite,
  Logo,
  IconSearch,
  IconLike,
  IconDislike,
  IconShare,
  IconMenu,
  IconClose,
  SourceProfile,
  IconNotification,
  SettingVideoGrid,
  IconChecked,
};
