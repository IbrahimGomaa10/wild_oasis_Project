import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
export function useBookings() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status");
  //?Filtering

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  //?sorting
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");

  //? Page pagination
  //! for page pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const sortBy = { field, direction };

  const { isLoading, data: { data: bookings, count } = {} } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  return { isLoading, bookings, count };
}
