import request from "@/utils/request";
import type {
  ChangePasswordForm,
  LoginFormData,
  RegisterFormData,
  TokenResult,
  UserResult,
} from "@/types/apis/auth";
import type { Result } from "@/types/apis/base";

enum API {
  LOGIN_URL = "/auth/login",
  REGISTER_URL = "/auth/register",
  USER_INFO_URL = "/auth/info",
  CHANGE_PASSWORD_URL="/auth/reset-password/update",
  LOGOUT_URL = "/auth/logout",
}

export const reqLogin = (data: LoginFormData) =>
  request.post<any, TokenResult>(API.LOGIN_URL, data);

export const reqRegister = (data: RegisterFormData) =>
  request.post<any, Result>(API.REGISTER_URL, data);

export const reqChangePassword = (data: ChangePasswordForm) =>
  request.post<any, Result>(API.CHANGE_PASSWORD_URL, data);

export const reqUserInfo = () => request.get<any, UserResult>(API.USER_INFO_URL);

export const reqLogOut = () => request.post<any, any>(API.LOGOUT_URL);
