export interface BusinessEntity {
  [key: string]: string | undefined;

  type: string;
  also_known_as?: string;
  can_invoice_local_customers?: string;
  allowed_to_issue_sales_invoices_to_local_clients?: string;
  allowed_to_sign_contracts_with_local_clients?: string;
  can_rent_local_office_space?: string;
  can_rent_local_office_premises?: string;
  allowed_to_import_and_export_goods?: string;
  allowed_to_import_raw_materials?: string;
  allowed_to_export_goods?: string;
  minimum_paid_up_share_capital?: string;
  Australia_resident_director_partner_manager_required?: string;
  australia_resident_director_partner_manager_required?: string;
  resident_director_manager_required?: string;
  local_registered_agent_required?: string;
  minimum_number_of_directors_managers_trustees?: string;
  minimum_number_of_directors?: string;
  minimum_number_of_shareholders_partners_beneficiaries?: string;
  minimum_number_of_shareholders_required?: string;
  minimum_number_of_shareholders?: string;
  director_ID_required_for_directors_in_all_entities?: string;
  corporate_directors_allowed?: string;
  individual_shareholders_allowed?: string;
  economic_substance_required?: string;
  is_statutory_audit_mandatory?: string;
  statutory_audit_required?: string;
  must_file_annual_australian_tax_return?: string;
  annual_tax_return_required?: string;
  must_file_annual_financial_statements?: string;
  must_file_annual_return?: string;
  access_to_double_taxation_treaties?: string;
  can_hire_expatriate_staff?: string;
  minimum_number_of_shareholders_partners?: string;
  corporate_shareholders_allowed?: string;
  statutory_audit_mandatory?: string;
  must_file_annual_tax_return?: string;
}

export interface CountryData {
  countryCode: string;
  country: string;
  flag: string;
  image: string;
  description: string;
  entities: BusinessEntity[];
  titleSeo: string;
  descriptionSeo: string;
  keywordsSeo: string;
}

export interface UpcomingCountry {
  country: string;
  flag: string;
  description: string;
}
