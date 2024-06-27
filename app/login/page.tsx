import Image from "next/image";
import classes from "./page.module.css";
import { IoPersonOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className={classes.container}>
      <Image src="/mine-logo-l.png" alt="logo" width={180} height={54.15} />
      <form className={classes.loginbox}>
        <div className={classes.login}>
          <IoPersonOutline className={classes.icon} color="#9f9f9f" />
          <input placeholder="아이디" />
        </div>
        <div className={classes.password}>
          <CiLock className={classes.icon} color="#9f9f9f" />
          <input placeholder="비밀번호" />
        </div>
        <p>
          <button>로그인</button>
        </p>
      </form>
      <Link href="/join"><p className={classes.join}>회원가입</p></Link>
    </div>
  );
};

export default LoginPage;
