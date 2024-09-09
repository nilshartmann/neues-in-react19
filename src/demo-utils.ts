import { useSuspenseQuery } from "@tanstack/react-query";

export function longRunningOperation<T>(value: T, duration = 2000): Promise<T> {
  return new Promise((res) => {
    setTimeout(() => res(value), duration);
  });
}

export function useFetchMyData(id: string, duration = 2000) {
  return useSuspenseQuery({
    queryKey: ["mydata", id],
    queryFn: async () => {
      console.log("Start fetching data with id", id);
      const result = await longRunningOperation(id, duration);
      console.log(
        "Finished fetching data with id",
        id,
        "after",
        duration,
        "ms",
      );
      return result;
    },
  });
}
