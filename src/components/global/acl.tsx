import { useAuth } from "@/hooks/useAuth";
import { ReactNode } from "react";

type ACLProps = {
  allowedRoles: string[];
  children: ReactNode;
}

export function ACL({ allowedRoles, children }: ACLProps) {
  const { user } = useAuth();
  if (!user || !allowedRoles.includes(user.role)) {
    return null;
  }
  return (
    <>
      {children}
    </>
  )
}
