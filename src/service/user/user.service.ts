import { api } from "../index"

export async function getUsers(username: string) {
  const { data } = await api.get<IUser>(`/${username}`)
  return data;
}

export async function getRepos(username: string) {
  const { data } = await api.get<IRepository[]>(`/${username}/repos`)
  return data;
}