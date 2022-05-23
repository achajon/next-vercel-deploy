import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

type Props = {
  text: string,
  href: string
}

const ActiveLink: FC<Props> = ({ text, href, ...rest }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a style={router.asPath === href ? style : undefined} {...rest}>
        {text}
      </a>
    </Link>
  );
};

export default ActiveLink;
