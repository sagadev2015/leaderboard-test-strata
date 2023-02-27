interface UserDetails {
  username: string;
  profileImage: string;
  score: number;
  isFaviourte?: boolean
}

type LeaderboardData = {
  leaderboard: UserDetails[];
};

type ProfileData = {
  username: string;
  bio: string;
  age: number;
  twitter: string;
  email: string;
  birthday: string;
};

type userFavouriteType = {
  username: string;
  isFavourite: boolean
}
