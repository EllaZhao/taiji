


export const SEARCH_PAGE = "SEARCH_PAGE"
export const COMPANY_PAGE = "COMPANY_PAGE"
export const DO_SEARCH_ACTION = "DO_SEARCH_ACTION"

export const openCompany = (companyId) => {
  return {
    type: COMPANY_PAGE,
    companyId
  }
}