import { UserType } from '../constants/types.constants';

export interface User {
  avatar_url?: string;
  events_url?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  gravatar_id?: string;
  html_url?: string;
  id?: number;
  login?: string;
  node_id?: string;
  organizations_url?: string;
  received_events_url?: string;
  repos_url?: string;
  site_admin?: boolean;
  starred_url?: string;
  subscriptions_url?: string;
  type?: UserType;
  url?: string;
  name?: string;
}

export interface UserRepos {
  fullName?: string;
  homePage?: string;
  htmlUrl?: string;
}
