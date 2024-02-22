import { TRepositoryCard } from "../components/repository-card/RepositoryCard";

export const getRepositories = async (
  title: string,
  perPage: number
): Promise<{ items: TRepositoryCard[] }> => {
  const base = "https://api.github.com";

  try {
    const response = await fetch(
      `${base}/search/repositories?q=${title}&per_page=${perPage}`,
      { cache: "force-cache" }
    );

    if (!response.ok) throw new Error("Неправильный статус ответа");

    const repositories = await response.json();

    if (repositories.items.length === 0) {
      return { items: [] };
    }

    return repositories;
  } catch (error) {
    console.error((error as Error).message);

    return { items: [] };
  }
};
