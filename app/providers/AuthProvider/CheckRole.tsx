import { useRouter } from "next/router";
import { FC } from "react";

import { useUser } from "@/hooks/useUser";

import { TypeComponentAuthFields } from "@/shared/types/auth.types";
import { ROLES } from "@/shared/types/user.types";

const CheckRole: FC<TypeComponentAuthFields> = ({
  children,
  Component: { isOnlyAdmin, isOnlyUser },
}) => {
  const { user } = useUser();
  const router = useRouter();

  const isAdmin = user?.roles.includes(ROLES.ADMIN);

  const Children: FC = () => <>{children}</>;

  if (isAdmin) return <Children />;

  if (isOnlyAdmin) {
    router.pathname !== "/404" && router.replace("/404");
    return null;
  }

  const isUser = user && !isAdmin;

  if (isUser && isOnlyUser) return <Children />;
  else {
    router.pathname !== "/404" && router.replace("/login");
    return null;
  }
};

export default CheckRole;
