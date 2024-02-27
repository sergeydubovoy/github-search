import axios from "axios";
import { TRepositoryCard } from "../../entities/RepositoryCard/RepositoryCard";

export const getRepositories = async (
  title: string,
  perPage: number
): Promise<TRepositoryCard[]> => {
  const base = "https://api.github.com";

  try {
    const response = await axios.get(
      `${base}/search/repositories?q=${title}&per_page=${perPage}`
    );

    if (response.status !== 200) throw new Error("Неправильный статус ответа");

    const repositories = response.data.items;

    if (!Array.isArray(repositories)) {
      throw new Error("Ожидалось, что ответ содержал массив 'items'.");
    }

    if (repositories.length === 0) {
      return [];
    }

    return repositories;
  } catch (error) {
    console.error((error as Error).message);

    return [];
  }
};
