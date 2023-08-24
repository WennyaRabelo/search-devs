import { IUser } from "@/interface/user";
import { api } from "../index"
import { IRepository } from "@/interface/repository";

export async function getUsers(username: string) {
  const { data } = await api.get<IUser>(`/${username}`)
  return data;
}

export async function getRepos(username: string) {
  const { data } = await api.get<IRepository[]>(`/${username}/repos`)
  return data;
}