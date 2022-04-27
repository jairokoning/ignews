import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiviLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...rest }: ActiviLinkProps) {
  const { asPath } = useRouter();

  const className = asPath === rest.href
    ? activeClassName
    : '';
    
  return (
    <Link {...rest}>
      {cloneElement(children, {
        className
      })}
    </Link>
  );
}