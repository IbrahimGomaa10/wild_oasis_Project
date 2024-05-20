import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperation() {
  return (
    <TableOperations>
      <Filter
        filterFieldName="discount"
        operationsName={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort By Name (A-Z)" },
          { value: "name-desc", label: "Sort By Name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort By Price (Low First)" },
          { value: "regularPrice-desc", label: "Sort By Price (high First)" },
          { value: "maxCapacity-asc", label: "Sort By Capacity (low First)" },
          { value: "maxCapacity-desc", label: "Sort By Capacity (high First)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperation;
