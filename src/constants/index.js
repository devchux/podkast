import {
  GenreIcon,
  HomeIcon,
  PersonIcon,
  PlaylistIcon,
  SpeakerIcon,
  TrendingIcon,
  VideoIcon,
} from "../assets/svg";

export const NAV_CONSTANTS = [
  {
    title: "Menu",
    children: [
      {
        title: "Home",
        link: "/",
        icon: HomeIcon,
      },
      {
        title: "Trending",
        link: "/",
        icon: TrendingIcon,
      },
      {
        title: "Genre",
        link: "/",
        icon: GenreIcon,
      },
      {
        title: "Speaker",
        link: "/",
        icon: SpeakerIcon,
      },
      {
        title: "Playlist",
        link: "/",
        icon: PlaylistIcon,
      },
    ],
  },
  {
    title: "More",
    children: [
      {
        title: "Live Stream",
        link: "/",
        icon: VideoIcon,
      },
      {
        title: "Account",
        link: "/",
        icon: PersonIcon,
      },
    ],
  },
];
