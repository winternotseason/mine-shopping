"use client";

import classes from "./search-input.module.css";
import { redirect } from "next/navigation";
import { useState } from "react";
const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className={classes.search}>
      <form
        action={() => {
          redirect(`/search/${inputValue}`);
        }}
      >
        <input
          type="text"
          name="search-input"
          placeholder="상품명을 입력해주세요"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchInput;