import styled from "styled-components";
import img from "../img/search.svg"
import { useState } from "react";

const SearchBar = styled.input`
    box-sizing: border-box;
    width: 384px;
    height: 53px;
    border-radius: 50px;
    box-shadow: 4px 6px 4px 0px #00000040 inset;
    background-color: #F8F8F8;
    border: none;
    text-indent: 30px;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 18px 18px;
    background-position:center right 30px; 
    :focus {
        outline: none;
    }
    ::placeholder {
        font-family: Noto Sans KR;
        font-size: 13px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
    }
`;

function Check(search: string) {
    if (search === null || search === "") {
        alert("검색어를 입력하세요.");
    } else if (search.length < 2) {
        alert("두 글자 이상 입력해주세요.");
    } else {
        // 검색
    }
}

function Search() {
    const [search, setSearch] = useState<string>("");

    const onChangeSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            console.log(search);
            Check(search);
        }
    }

  return (
    <>
        <SearchBar
        type="text"
        placeholder="검색어를 입력하세요"
        value={search}
        minLength={2}
        maxLength={10}
        onChange={onChangeSearch}
        onKeyDown={handleKeyDown}
      />
    </>
  );
}

export default Search;
