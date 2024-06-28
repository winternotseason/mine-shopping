"use client";
import classes from "./main-nav.module.css";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { GoSignIn, GoSignOut } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const MainNav = () => {
  const { status, data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [router, status]);


  return (
    <div className={classes.footer}>
      <div className={classes.nav}>
        <GoPerson className={classes.icon} />
        <p>마이페이지</p>
      </div>
      <Link href="/">
        <div className={classes.nav}>
          <BiSolidShoppingBagAlt className={classes.icon} />
          <p>쇼핑홈</p>
        </div>
      </Link>
      {status === "authenticated" ? (
        <form className={classes.nav}>
          <button onClick={async () => await signOut()}>
            <GoSignOut className={classes.icon} />
            <p>로그아웃</p>
          </button>
        </form>
      ) : (
        <Link href="/login">
          <div className={`${classes.nav} ${classes.login}`}>
            <GoSignIn className={classes.icon} />
            <p>로그인</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default MainNav;
