import { defineStore } from "pinia";

interface Actions {
  login(authUser: AuthenticatedUser): void;

  logout(): void;
}
export interface AuthenticatedUser {
	jwtToken: string;
  }

interface State {
  user: AuthenticatedUser | null;
}
function setUserFromStorage() {
  const session = JSON.parse(localStorage.getItem("user")!);
  if (session) {
    return {
      jwtToken: session.jwtToken,
    };
  }
  return null;
}
export const useAuthStore = defineStore<string, State, any, Actions>("auth", {
  state: () => ({
    user: setUserFromStorage(),
    isAuth: false,
  }),
  actions: {
    login(authUser: AuthenticatedUser) {
      localStorage.setItem("user", JSON.stringify(authUser));
      this.user = authUser;
    },
    logout(): any {
      this.user = null;
      localStorage.removeItem("user");
    },
  },
});