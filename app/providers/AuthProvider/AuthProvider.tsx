import dynamic from "next/dynamic";
import { FC } from "react";

import { useUser } from "@/hooks/useUser";

import { TypeComponentAuthFields } from "@/shared/types/auth.types";

const DymanicCheckRole = dynamic(() => import("./CheckRole"), { ssr: false });

const AuthProvider: FC<TypeComponentAuthFields> = ({
  children,
  Component: { isOnlyAdmin, isOnlyUser },
}) => {
  useUser();
  if (!isOnlyAdmin && !isOnlyUser) return <>{children}</>;

  return (
    <DymanicCheckRole Component={{ isOnlyAdmin, isOnlyUser }}>
      {children}
    </DymanicCheckRole>
  );
};

export default AuthProvider;
