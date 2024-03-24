"use client";

import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Searchbar({ ...props }) {
  const search = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(search.get("query"));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const category = search.get("category");
      router.push(
        `/ideas?query=${query}${category ? "&category=" + category : ""}`
      );
    }
  };

  useEffect(() => {
    setQuery(search.get("query"));
  }, [search]);

  return (
    <InputGroup {...props}>
      <InputLeftElement pointerEvents="none" fontSize={24}>
        <FiSearch />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search for an idea..."
        borderColor="gray.600"
        rounded="full"
        pl={12}
        value={query || ""}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </InputGroup>
  );
}
