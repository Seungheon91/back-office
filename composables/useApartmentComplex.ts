import type { ApartmentComplex } from "~/types/apartment-complex";
import type { PaginationResponse } from "~/types/response";

export function useApartmentComplex() {
  const getApartmentComplexList = async () => {
    const { data } = await useCustomFetch<
      PaginationResponse<Array<ApartmentComplex>>
    >("/api/syst/apts", { method: "GET", query: Object.assign({}) });
  };

  return {
    getApartmentComplexList,
  };
}
