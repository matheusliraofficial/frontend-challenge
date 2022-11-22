import { SearchProps } from "./Search.types";
import { StyledPaper, StyledInputBase } from "./Search.styles";

const Search = ({ onChange, value }: SearchProps) => (
  <StyledPaper>
    <StyledInputBase
      placeholder="Search GitHub Repositories"
      inputProps={{ "aria-label": "search github repositories" }}
      onChange={onChange}
      value={value}
    />
  </StyledPaper>
);

export default Search;