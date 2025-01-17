export type User = {
  id: string;
  username: string;
  avatar: string;
  fullName: string;
  email: string;
  mobile: string;
  role: number;
};
export type Profile = {
  id: string;
  userId: string;
  friendsCount: number;
  followersCount: number;
  followingCount: number;
  postsCount: number;
  isFollowing: boolean;
};

export type SearchForm = {
  key: string;
  role: string;
  category: string;
  rate: number;
  relationsive: string;
};

export type ChangePasswordForm = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};
