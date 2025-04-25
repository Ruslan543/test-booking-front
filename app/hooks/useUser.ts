import { useQuery, useQueryClient } from "@tanstack/react-query";

import { IUser } from "@/shared/types/user.types";

export const useUser = () => {
  const { data: user, isLoading } = useQuery<IUser>({
    queryKey: ["user"],
    queryFn: () => {
      const user = JSON.parse(localStorage.getItem("user") ?? "");
      return user || null;
    },
    cacheTime: Infinity,
    staleTime: Infinity,
  });

  // const queryClient = useQueryClient();
  // const user = queryClient.getQueryData<IUser>(["user"]);

  return { user };
};
