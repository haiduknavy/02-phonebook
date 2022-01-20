import { FilterInput, FilterLabel } from "./Filter.styled";

export default function Filter({ data }) {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" onChange={data} />
    </FilterLabel>
  );
}
