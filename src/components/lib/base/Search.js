import { Input } from 'antd';
import React from "react";

const Search = Input.Search;

const SearchWechat = () => (
    <Search
        placeholder="搜索"
        onSearch={value => console.log(value)}
        style={{ width: '90%', margin: '0.6rem 0' }}
    />
);

export default SearchWechat;
