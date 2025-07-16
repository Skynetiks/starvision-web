import { BusinessEntity, CountryData, UpcomingCountry } from "@/types/business";

export const businessData: CountryData[] = [
  {
    countryCode: "AU",
    country: "Australia",
    flag: "🇦🇺",
    image: "/images/countries/australia.webp",
    description:
      "Australia offers a stable economy, strong legal system, and access to Asian markets. Benefits include no minimum capital requirements, access to double taxation treaties, and a straightforward incorporation process. Ideal for businesses looking to establish an Asia-Pacific presence with English-speaking legal framework.",
    entities: [
      {
        type: "Limited Liability Company (LLC)",
        can_invoice_local_customers: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_space: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "None",
        australia_resident_director_partner_manager_required: "Yes",
        minimum_number_of_directors_managers_trustees: "1",
        minimum_number_of_shareholders_partners_beneficiaries: "1",
        director_ID_required_for_directors_in_all_entities: "Yes",
        is_statutory_audit_mandatory: "No",
        must_file_annual_australian_tax_return: "Yes",
        must_file_annual_financial_statements: "Yes",
        access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "Limited Liability Partnership (LLP)",
        can_invoice_local_customers: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_space: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "None",
        australia_resident_director_partner_manager_required: "Yes",
        minimum_number_of_directors_managers_trustees: "2",
        minimum_number_of_shareholders_partners_beneficiaries: "2",
        director_ID_required_for_directors_in_all_entities: "No",
        is_statutory_audit_mandatory: "No",
        must_file_annual_australian_tax_return: "No",
        must_file_annual_financial_statements: "No",
        access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "Branch Office",
        can_invoice_local_customers: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_space: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "None",
        australia_resident_director_partner_manager_required: "Yes",
        minimum_number_of_directors_managers_trustees: "1",
        minimum_number_of_shareholders_partners_beneficiaries: "Parent Company",
        director_ID_required_for_directors_in_all_entities: "Yes",
        is_statutory_audit_mandatory: "Yes",
        must_file_annual_australian_tax_return: "Yes",
        must_file_annual_financial_statements: "Yes",
        access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "Representative Office",
        can_invoice_local_customers: "No",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_space: "Yes",
        allowed_to_import_and_export_goods: "No",
        minimum_paid_up_share_capital: "None",
        australia_resident_director_partner_manager_required: "Yes",
        minimum_number_of_directors_managers_trustees: "1",
        minimum_number_of_shareholders_partners_beneficiaries: "Parent Company",
        director_ID_required_for_directors_in_all_entities: "Yes",
        is_statutory_audit_mandatory: "No",
        must_file_annual_australian_tax_return: "No",
        must_file_annual_financial_statements: "No",
        access_to_double_taxation_treaties: "No",
      },
    ],
  },
  {
    countryCode: "VG",
    country: "British Virgin Islands",
    flag: "🇻🇬",
    image: "/images/countries/british-virgin-islands.webp",
    description:
      "The BVI is a premier offshore jurisdiction known for tax neutrality, privacy, and simplicity. Advantages include no corporate taxes, minimal reporting requirements, and fast incorporation (often within 24 hours). Perfect for international trading, holding companies, and asset protection.",
    entities: [
      {
        type: "BVI Business Company",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        minimum_paid_up_share_capital: "US$1",
        resident_director_manager_required: "No",
        local_registered_agent_required: "Yes",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "1",
        economic_substance_required: "Yes",
        must_file_annual_return: "Yes",
      },
      {
        type: "BVI LLC",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        minimum_paid_up_share_capital: "US$1",
        resident_director_manager_required: "No",
        local_registered_agent_required: "Yes",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "1",
        economic_substance_required: "Yes",
        must_file_annual_return: "Yes",
      },
      {
        type: "Incubator Hedge Fund",
        allowed_to_issue_sales_invoices_to_local_clients: "No",
        allowed_to_sign_contracts_with_local_clients: "No",
        can_rent_local_office_premises: "Yes",
        minimum_paid_up_share_capital: "US$1",
        resident_director_manager_required: "Yes",
        local_registered_agent_required: "Yes",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "1",
        economic_substance_required: "Yes",
        must_file_annual_return: "Yes",
      },
      {
        type: "Partnership",
        allowed_to_issue_sales_invoices_to_local_clients: "No",
        allowed_to_sign_contracts_with_local_clients: "No",
        can_rent_local_office_premises: "Yes",
        minimum_paid_up_share_capital: "US$1",
        resident_director_manager_required: "No",
        local_registered_agent_required: "Yes",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "1",
        economic_substance_required: "Yes",
        must_file_annual_return: "Yes",
      },
      {
        type: "Trust",
        allowed_to_issue_sales_invoices_to_local_clients: "No",
        allowed_to_sign_contracts_with_local_clients: "No",
        can_rent_local_office_premises: "Yes",
        minimum_paid_up_share_capital: "US$1",
        resident_director_manager_required: "No",
        local_registered_agent_required: "Yes",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "1",
        economic_substance_required: "No",
        must_file_annual_return: "No",
      },
    ],
  },
  {
    countryCode: "AE",
    country: "Dubai",
    flag: "🇦🇪",
    image: "/images/countries/dubai.webp",
    description:
      "Dubai's free zones offer 100% foreign ownership, zero taxes, and world-class infrastructure. Key benefits include no currency restrictions, strategic location between East and West, and various industry-specific free zones. Ideal for trading, logistics, and regional headquarters.",
    entities: [
      {
        type: "DMCC",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "US$14,000",
        resident_director_manager_required: "No",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "1",
        is_statutory_audit_mandatory: "Yes",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "No",
	      access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "Meydan Free Zone",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "US$27,500",
        resident_director_manager_required: "No",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "1",
        is_statutory_audit_mandatory: "Yes",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "No",
	      access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "Jebel Ali Free Zone",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "US$0",
        resident_director_manager_required: "No",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "1",
        is_statutory_audit_mandatory: "Yes",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "No",
	      access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "DIFC",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "US$50,000",
        resident_director_manager_required: "No",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "1",
        is_statutory_audit_mandatory: "Yes",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "No",
	      access_to_double_taxation_treaties: "Yes",
      },
    ],
  },
  {
    countryCode: "DE",
    country: "Germany",
    flag: "🇩🇪",
    image: "/images/countries/germany.webp",
    description:
      "Germany provides access to the EU's largest economy with excellent infrastructure and skilled workforce. Benefits include strong legal protections, EU market access, and high credibility. The GmbH structure is particularly respected worldwide. Minimum €25,000 capital required.",
    entities: [
      {
        type: "Limited Liability Company (LLC)",
        also_known_as: "GmbH",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "€25,000",
        resident_director_manager_required: "No",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "1",
        is_statutory_audit_mandatory: "Yes",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "Branch office",
        also_known_as: "Zweigniederlassung",
        allowed_to_issue_sales_invoices_to_local_clients: "No",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "None",
        resident_director_manager_required: "No",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "Parent company",
        is_statutory_audit_mandatory: "Yes",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "Representative office",
        also_known_as: "Repräsentanz",
        allowed_to_issue_sales_invoices_to_local_clients: "No",
        allowed_to_sign_contracts_with_local_clients: "No",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "No",
        minimum_paid_up_share_capital: "None",
        resident_director_manager_required: "No",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "Parent company",
        is_statutory_audit_mandatory: "No",
        annual_tax_return_required: "No",
        must_file_annual_return: "No",
        access_to_double_taxation_treaties: "No",
      },
    ],
  },
  {
    countryCode: "HK",
    country: "Hong Kong",
    flag: "🇭🇰",
    image: "/images/countries/hong-kong.webp",
    description:
      "Hong Kong offers low taxes (16.5% corporate rate), no capital gains tax, and free port status. Advantages include simple incorporation (1 day), no foreign exchange controls, and gateway to China. Ideal for international trade and holding companies.",
    entities: [
      {
        type: "Resident company",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "US$1",
        resident_director_manager_required: "No",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "1",
        corporate_directors_allowed: "Yes",
        individual_shareholders_allowed: "Yes",
        is_statutory_audit_mandatory: "Yes",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "Branch office",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "US$1",
        resident_director_manager_required: "No",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "Parent company",
        corporate_directors_allowed: "Yes",
        individual_shareholders_allowed: "No",
        is_statutory_audit_mandatory: "Yes",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "Representative office",
        allowed_to_issue_sales_invoices_to_local_clients: "No",
        allowed_to_sign_contracts_with_local_clients: "No",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "US$1",
        resident_director_manager_required: "No",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "Parent company",
        corporate_directors_allowed: "Yes",
        individual_shareholders_allowed: "No",
        is_statutory_audit_mandatory: "No",
        annual_tax_return_required: "No",
        must_file_annual_return: "No",
        access_to_double_taxation_treaties: "No",
      },
    ],
  },

  {
    countryCode: "IN",
    country: "India",
    flag: "🇮🇳",
    image: "/images/countries/india.webp",
    description:
      "India's growing economy offers vast market potential. Benefits include access to SEZs with tax holidays, large English-speaking workforce, and improving ease of business. FDI allowed in most sectors. Requires 2 directors (1 must be resident).",
    entities: [
      {
        type: "Limited Liability Company (LLC)",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_raw_materials: "Yes",
        allowed_to_export_goods: "Yes",
        minimum_paid_up_share_capital: "US$1,650",
        resident_director_manager_required: "Yes",
        minimum_number_of_directors: "2",
        minimum_number_of_shareholders: "2",
        corporate_directors_allowed: "Yes",
        individual_shareholders_allowed: "Yes",
        statutory_audit_required: "No",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
        can_hire_expatriate_staff: "Yes",
      },
      {
        type: "Special Economic Zones (SEZ)",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_raw_materials: "Yes",
        allowed_to_export_goods: "Yes",
        minimum_paid_up_share_capital:
          "SEZ - Depending on type of SEZ and business activities",
        resident_director_manager_required: "Yes",
        minimum_number_of_directors: "2",
        minimum_number_of_shareholders: "2",
        corporate_directors_allowed: "No",
        individual_shareholders_allowed: "Yes",
        statutory_audit_required: "Yes",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
        can_hire_expatriate_staff: "Yes",
      },
      {
        type: "Branch office",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_raw_materials: "Yes",
        allowed_to_export_goods: "Yes",
        minimum_paid_up_share_capital: "None",
        resident_director_manager_required: "Yes",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders: "Parent company",
        corporate_directors_allowed: "No",
        individual_shareholders_allowed: "No",
        statutory_audit_required: "Yes",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
        can_hire_expatriate_staff: "Yes",
      },
      {
        type: "Representative office",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_raw_materials: "Yes",
        allowed_to_export_goods: "Yes",
        minimum_paid_up_share_capital: "None",
        resident_director_manager_required: "Yes",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders: "Parent company",
        corporate_directors_allowed: "No",
        individual_shareholders_allowed: "No",
        statutory_audit_required: "No",
        annual_tax_return_required: "No",
        must_file_annual_return: "No",
        access_to_double_taxation_treaties: "Yes",
        can_hire_expatriate_staff: "Yes",
      },
    ],
  },
  {
    countryCode: "ID",
    country: "Indonesia",
    flag: "🇮🇩",
    image: "/images/countries/indonesia.webp",
    description:
      "Indonesia offers access to Southeast Asia's largest economy with growing middle class. PMA companies allow 100% foreign ownership in many sectors. Free trade zones provide tax incentives. Minimum $700,000 capital for most foreign investments.",
    entities: [
      {
        type: "Wholly foreign-owned LLC",
        also_known_as: "PMA",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "US$700,000",
        resident_director_manager_required: "Yes",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders: "2",
        is_statutory_audit_mandatory: "Yes",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "Free zone LLC",
        also_known_as: "PT-PMA conversion",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "Depends on type of FTZ",
        resident_director_manager_required: "Yes",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders: "2",
        is_statutory_audit_mandatory: "Yes",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "Representative Office",
        also_known_as: "KPB company",
        allowed_to_issue_sales_invoices_to_local_clients: "No",
        allowed_to_sign_contracts_with_local_clients: "No",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "No",
        resident_director_manager_required: "Yes",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders: "Parent Company",
        is_statutory_audit_mandatory: "No",
        annual_tax_return_required: "No",
        must_file_annual_return: "No",
        access_to_double_taxation_treaties: "No",
      },
    ],
  },
  {
    countryCode: "MY",
    country: "Malaysia",
    flag: "🇲🇾",
    image: "/images/countries/malaysia.webp",
    description:
      "Malaysia provides competitive costs with good infrastructure. Benefits include MSC status for tech companies (tax breaks), various industrial parks, and common law system. Resident director required but nominee services available.",
    entities: [
      {
        type: "Tax resident LLC",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "US$2",
        resident_director_manager_required: "Yes",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "2",
        corporate_directors_allowed: "Yes",
        individual_shareholders_allowed: "Yes",
        is_statutory_audit_mandatory: "Yes",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "Tax-exempt LLC",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "No",
        minimum_paid_up_share_capital: "US$1",
        resident_director_manager_required: "No",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "1",
        corporate_directors_allowed: "Yes",
        individual_shareholders_allowed: "Yes",
        is_statutory_audit_mandatory: "Yes",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "No",
      },
      {
        type: "Free zone LLC",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "US$125,000",
        resident_director_manager_required: "Yes",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "5",
        corporate_directors_allowed: "Yes",
        individual_shareholders_allowed: "Yes",
        is_statutory_audit_mandatory: "Yes",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "Bumiputera company",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "US$2",
        resident_director_manager_required: "Yes",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "2",
        corporate_directors_allowed: "Yes",
        individual_shareholders_allowed: "Yes",
        is_statutory_audit_mandatory: "Yes",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "Representative Office",
        allowed_to_issue_sales_invoices_to_local_clients: "No",
        allowed_to_sign_contracts_with_local_clients: "No",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "No",
        minimum_paid_up_share_capital: "None",
        resident_director_manager_required: "No",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "Parent company",
        corporate_directors_allowed: "No",
        individual_shareholders_allowed: "No",
        is_statutory_audit_mandatory: "No",
        annual_tax_return_required: "No",
        must_file_annual_return: "No",
        access_to_double_taxation_treaties: "No",
      },
    ],
  },
  {
    countryCode: "SG",
    country: "Singapore",
    flag: "🇸🇬",
    image: "/images/countries/singapore.webp",
    description:
      "Singapore is Asia's business hub with 0-17% corporate tax, no capital gains tax, and strong IP protections. Advantages include efficient bureaucracy, reputable jurisdiction, and extensive tax treaties. Requires at least 1 resident director.",
    entities: [
      {
        type: "Tax resident LLC",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "US$1",
        resident_director_manager_required: "Yes",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "1",
        corporate_directors_allowed: "Yes",
        individual_shareholders_allowed: "Yes",
        is_statutory_audit_mandatory: "No",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "Tax-exempt LLC",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "No",
        minimum_paid_up_share_capital: "US$1",
        resident_director_manager_required: "Yes",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "1",
        corporate_directors_allowed: "Yes",
        individual_shareholders_allowed: "Yes",
        is_statutory_audit_mandatory: "No",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "No",
      },
      {
        type: "Free zone LLC",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "US$1",
        resident_director_manager_required: "Yes",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "1",
        corporate_directors_allowed: "Yes",
        individual_shareholders_allowed: "Yes",
        is_statutory_audit_mandatory: "No",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "LLP",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "US$1",
        resident_director_manager_required: "Yes",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "2",
        corporate_directors_allowed: "Yes",
        individual_shareholders_allowed: "Yes",
        is_statutory_audit_mandatory: "No",
        annual_tax_return_required: "No",
        must_file_annual_return: "No",
        access_to_double_taxation_treaties: "No",
      },
      {
        type: "Representative Office",
        allowed_to_issue_sales_invoices_to_local_clients: "No",
        allowed_to_sign_contracts_with_local_clients: "No",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "No",
        minimum_paid_up_share_capital: "None",
        resident_director_manager_required: "Yes",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "Parent company",
        corporate_directors_allowed: "No",
        individual_shareholders_allowed: "No",
        is_statutory_audit_mandatory: "No",
        annual_tax_return_required: "No",
        must_file_annual_return: "No",
        access_to_double_taxation_treaties: "No",
      },
    ],
  },
  {
    countryCode: "ES",
    country: "Spain",
    flag: "🇪🇸",
    image: "/images/countries/spain.webp",
    description:
      "Spain offers EU market access with relatively low setup costs (€3,000 minimum capital). Benefits include skilled workforce, good infrastructure, and various regional incentives. SL is the most common corporate form for SMEs.",
    entities: [
      {
        type: "Tax Resident LLC",
        also_known_as: "SL",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "3,000 EUR",
        resident_director_manager_required: "No",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders: "1",
        is_statutory_audit_mandatory: "Yes",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "Branch office",
        also_known_as: "Sucursal",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "none",
        resident_director_manager_required: "Yes",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders: "Parent company",
        is_statutory_audit_mandatory: "Yes",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "Representative office",
        also_known_as: "Oficina de representación",
        allowed_to_issue_sales_invoices_to_local_clients: "No",
        allowed_to_sign_contracts_with_local_clients: "No",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "No",
        minimum_paid_up_share_capital: "none",
        resident_director_manager_required: "Yes",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders: "Parent company",
        is_statutory_audit_mandatory: "No",
        annual_tax_return_required: "No",
        must_file_annual_return: "No",
        access_to_double_taxation_treaties: "No",
      },
    ],
  },
  {
    countryCode: "LK",
    country: "Sri Lanka",
    flag: "🇱🇰",
    image: "/images/countries/sri-lanka.webp",
    description:
      "Sri Lanka provides strategic Indian Ocean location with improving business climate. Benefits include low minimum capital ($1), tax holidays for priority sectors, and free trade zones. Good for manufacturing and services targeting South Asia.",
    entities: [
      {
        type: "Limited Liability Company (LLC)",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "US$1",
        resident_director_manager_required: "No",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders: "2",
        is_statutory_audit_mandatory: "Yes",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "Branch office",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "None",
        resident_director_manager_required: "No",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders: "Parent company",
        is_statutory_audit_mandatory: "Yes",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "Representative office",
        allowed_to_issue_sales_invoices_to_local_clients: "No",
        allowed_to_sign_contracts_with_local_clients: "No",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "No",
        minimum_paid_up_share_capital: "US$1",
        resident_director_manager_required: "No",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders: "Parent company",
        is_statutory_audit_mandatory: "No",
        annual_tax_return_required: "No",
        must_file_annual_return: "No",
        access_to_double_taxation_treaties: "No",
      },
    ],
  },
  {
    countryCode: "TH",
    country: "Thailand",
    flag: "🇹🇭",
    image: "/images/countries/thailand.webp",
    description:
      "Thailand offers competitive manufacturing costs and growing consumer market. Options include Amity Treaty for Americans (100% ownership), BOI-promoted companies with tax holidays, or standard 51% Thai-owned entities. Good for regional ASEAN operations.",
    entities: [
      {
        type: "Amity Treaty LLC",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "US$90,900",
        resident_director_manager_required: "No",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "2",
        is_statutory_audit_mandatory: "Yes",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "51% LLC",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "US$450",
        resident_director_manager_required: "Yes",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "2",
        is_statutory_audit_mandatory: "Yes",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "BoI LLC",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "US$30,300",
        resident_director_manager_required: "No",
        minimum_number_of_directors: "1",
        minimum_number_of_shareholders_required: "2",
        is_statutory_audit_mandatory: "Yes",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
      },
    ],
  },
  {
    countryCode: "GB",
    country: "United Kingdom",
    flag: "🇬🇧",
    image: "/images/countries/united-kingdom.webp",
    description:
      "The UK provides global credibility with simple incorporation (£1 minimum capital). Benefits include no foreign ownership restrictions, strong legal system, and extensive double tax treaties. London remains a premier financial center despite Brexit.",
    entities: [
      {
        type: "Limited Liability Company (LLC)",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "£1",
        resident_director_manager_required: "No",
        minimum_number_of_directors: "1",
        corporate_directors_allowed: "Yes",
        corporate_shareholders_allowed: "Yes",
        statutory_audit_mandatory: "No",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "LLP",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "None",
        resident_director_manager_required: "No",
        minimum_number_of_directors: "2",
        corporate_directors_allowed: "No",
        corporate_shareholders_allowed: "Yes",
        statutory_audit_mandatory: "No",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "No",
      },
      {
        type: "Branch Office",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "None",
        resident_director_manager_required: "No",
        minimum_number_of_directors: "1",
        corporate_directors_allowed: "No",
        corporate_shareholders_allowed: "No",
        statutory_audit_mandatory: "No",
        annual_tax_return_required: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "Representative Office",
        allowed_to_issue_sales_invoices_to_local_clients: "No",
        allowed_to_sign_contracts_with_local_clients: "No",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "No",
        minimum_paid_up_share_capital: "None",
        resident_director_manager_required: "No",
        minimum_number_of_directors: "1",
        corporate_directors_allowed: "No",
        corporate_shareholders_allowed: "No",
        statutory_audit_mandatory: "No",
        annual_tax_return_required: "No",
        must_file_annual_return: "No",
        access_to_double_taxation_treaties: "Yes",
      },
    ],
  },
  {
    countryCode: "VN",
    country: "Vietnam",
    flag: "🇻🇳",
    image: "/images/countries/vietnam.webp",
    description:
      "Vietnam offers fast-growing economy with low labor costs and numerous free trade agreements. Benefits include various industrial zones with incentives, though most sectors require 51% local ownership or joint venture. Increasingly popular for manufacturing.",
    entities: [
      {
        type: "Limited Liability Company (LLC)",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "US$ 1",
        resident_director_manager_required: "Yes",
        minimum_number_of_directors_managers_trustees: "1",
        minimum_number_of_shareholders_partners: "1",
        is_statutory_audit_mandatory: "Yes",
        must_file_annual_tax_return: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "Free zone LLC",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "US$ 1",
        resident_director_manager_required: "Yes",
        minimum_number_of_directors_managers_trustees: "1",
        minimum_number_of_shareholders_partners: "1",
        is_statutory_audit_mandatory: "Yes",
        must_file_annual_tax_return: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "Joint venture",
        allowed_to_issue_sales_invoices_to_local_clients: "Yes",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "US$ 1",
        resident_director_manager_required: "Yes",
        minimum_number_of_directors_managers_trustees: "1",
        minimum_number_of_shareholders_partners: "Parent Company",
        is_statutory_audit_mandatory: "Yes",
        must_file_annual_tax_return: "Yes",
        must_file_annual_return: "Yes",
        access_to_double_taxation_treaties: "Yes",
      },
      {
        type: "Representative office",
        allowed_to_issue_sales_invoices_to_local_clients: "No",
        allowed_to_sign_contracts_with_local_clients: "Yes",
        can_rent_local_office_premises: "Yes",
        allowed_to_import_and_export_goods: "Yes",
        minimum_paid_up_share_capital: "N/A",
        resident_director_manager_required: "Yes",
        minimum_number_of_directors_managers_trustees: "1",
        minimum_number_of_shareholders_partners: "Parent Company",
        is_statutory_audit_mandatory: "No",
        must_file_annual_tax_return: "No",
        must_file_annual_return: "No",
        access_to_double_taxation_treaties: "Yes",
      },
    ],
  },
];

export function getAllCountryCode(): string[] {
  return businessData.map((country) => country.countryCode);
}

export function getCountryDataUsingCountryCode(
  countryCode: string
): CountryData | null {
  return (
    businessData.find(
      (country) =>
        country.countryCode.toLowerCase().replace(/\s+/g, "-") ===
        countryCode.toLowerCase()
    ) || null
  );
}

export function getCountryData(countrySlug: string): CountryData | null {
  return (
    businessData.find(
      (country) =>
        country.country.toLowerCase().replace(/\s+/g, "-") === countrySlug
    ) || null
  );
}

export function getAllCountries(): string[] {
  return businessData.map((country) =>
    country.country.toLowerCase().replace(/\s+/g, "-").toLowerCase()
  );
}

export function getEntityData(
  countrySlug: string,
  entitySlug: string
): BusinessEntity | null {
  const country = getCountryData(countrySlug);
  if (!country) return null;

  return (
    country.entities.find(
      (entity) =>
        entity.type.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "") ===
        entitySlug
    ) || null
  );
}

export const upcomingCountries: UpcomingCountry[] = [
  {
    country: "Abu Dhabi",
    flag: "🇦🇪",
    description: "A thriving business hub in the UAE."
  },
  {
    country: "Afghanistan",
    flag: "🇦🇫",
    description: "Emerging opportunities in Central Asia."
  },
  {
    country: "Ajman",
    flag: "🇦🇪",
    description: "A growing emirate for trade."
  },
  {
    country: "Albania",
    flag: "🇦🇱",
    description: "A Balkan gateway to Europe."
  },
  {
    country: "Algeria",
    flag: "🇩🇿",
    description: "North Africa’s energy powerhouse."
  },
  {
    country: "Andorra",
    flag: "🇦🇩",
    description: "A small nation with big potential."
  },
  {
    country: "Angola",
    flag: "🇦🇴",
    description: "Rich in resources and growth."
  },
  {
    country: "Anguilla",
    flag: "🇦🇮",
    description: "A Caribbean offshore haven."
  },
  {
    country: "Argentina",
    flag: "🇦🇷",
    description: "South America’s vibrant economy."
  },
  {
    country: "Armenia",
    flag: "🇦🇲",
    description: "A bridge between Europe and Asia."
  },
  {
    country: "Austria",
    flag: "🇦🇹",
    description: "European elegance meets innovation."
  },
  {
    country: "Bahamas",
    flag: "🇧🇸",
    description: "A tropical business paradise."
  },
  {
    country: "Bahrain",
    flag: "🇧🇭",
    description: "A financial hub in the Gulf."
  },
  {
    country: "Bangladesh",
    flag: "🇧🇩",
    description: "Rapidly growing in South Asia."
  },
  {
    country: "Barbados",
    flag: "🇧🇧",
    description: "Caribbean charm with business appeal."
  },
  {
    country: "Belgium",
    flag: "🇧🇪",
    description: "Heart of European commerce."
  },
  {
    country: "Belize",
    flag: "🇧🇿",
    description: "A Central American gem."
  },
  {
    country: "Benin",
    flag: "🇧🇯",
    description: "West Africa’s trade potential."
  },
  {
    country: "Bermuda",
    flag: "🇧🇲",
    description: "A global offshore leader."
  },
  {
    country: "Bolivia",
    flag: "🇧🇴",
    description: "Rich in natural resources."
  },
  {
    country: "Bosnia",
    flag: "🇧🇦",
    description: "Emerging Balkan market."
  },
  {
    country: "Botswana",
    flag: "🇧🇼",
    description: "Stable growth in Southern Africa."
  },
  {
    country: "Brazil",
    flag: "🇧🇷",
    description: "South America’s largest economy."
  },
  {
    country: "Brunei",
    flag: "🇧🇳",
    description: "Wealthy Southeast Asian nation."
  },
  {
    country: "Bulgaria",
    flag: "🇧🇬",
    description: "A cost-effective EU member."
  },
  {
    country: "Burkina Faso",
    flag: "🇧🇫",
    description: "Opportunities in West Africa."
  },
  {
    country: "Burundi",
    flag: "🇧🇮",
    description: "East Africa’s untapped potential."
  },
  {
    country: "Cambodia",
    flag: "🇰🇭",
    description: "Southeast Asia’s rising star."
  },
  {
    country: "Cameroon",
    flag: "🇨🇲",
    description: "A gateway to Central Africa."
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    description: "A hub for innovation and growth."
  },
  {
    country: "Cayman Islands",
    flag: "🇰🇾",
    description: "Premier offshore jurisdiction."
  },
  {
    country: "Central African Republic",
    flag: "🇨🇫",
    description: "Resource-rich potential."
  },
  {
    country: "Chad",
    flag: "🇹🇩",
    description: "Emerging in Central Africa."
  },
  {
    country: "Chile",
    flag: "🇨🇱",
    description: "Stable South American market."
  },
  {
    country: "China",
    flag: "🇨🇳",
    description: "Global manufacturing giant."
  },
  {
    country: "Colombia",
    flag: "🇨🇴",
    description: "Dynamic Latin American economy."
  },
  {
    country: "Congo",
    flag: "🇨🇬",
    description: "Rich in resources and opportunity."
  },
  {
    country: "Costa Rica",
    flag: "🇨🇷",
    description: "Eco-friendly business hub."
  },
  {
    country: "Croatia",
    flag: "🇭🇷",
    description: "Adriatic gateway to Europe."
  },
  {
    country: "Cyprus",
    flag: "🇨🇾",
    description: "Mediterranean business bridge."
  },
  {
    country: "Czech Republic",
    flag: "🇨🇿",
    description: "Central Europe’s industrial hub."
  },
  {
    country: "Delaware",
    flag: "🇺🇸",
    description: "Top U.S. business state."
  },
  {
    country: "Denmark",
    flag: "🇩🇰",
    description: "Nordic innovation leader."
  },
  {
    country: "Dominica",
    flag: "🇩🇲",
    description: "Caribbean investment destination."
  },
  {
    country: "Dominican Republic",
    flag: "🇩🇴",
    description: "Growing Caribbean economy."
  },
  {
    country: "Ecuador",
    flag: "🇪🇨",
    description: "Diverse South American market."
  },
  {
    country: "Egypt",
    flag: "🇪🇬",
    description: "North Africa’s economic powerhouse."
  },
  {
    country: "El Salvador",
    flag: "🇸🇻",
    description: "Central America’s rising star."
  },
  {
    country: "Equatorial Guinea",
    flag: "🇬🇶",
    description: "Oil-rich African nation."
  },
  {
    country: "Eritrea",
    flag: "🇪🇷",
    description: "Horn of Africa potential."
  },
  {
    country: "Estonia",
    flag: "🇪🇪",
    description: "Digital innovation leader."
  },
  {
    country: "Ethiopia",
    flag: "🇪🇹",
    description: "Africa’s fastest-growing economy."
  },
  {
    country: "Finland",
    flag: "🇫🇮",
    description: "Nordic tech and design hub."
  },
  {
    country: "France",
    flag: "🇫🇷",
    description: "European elegance and opportunity."
  },
  {
    country: "Gabon",
    flag: "🇬🇦",
    description: "Resource-rich Central Africa."
  },
  {
    country: "Georgia",
    flag: "🇬🇪",
    description: "Crossroads of Europe and Asia."
  },
  {
    country: "Ghana",
    flag: "🇬🇭",
    description: "West Africa’s stable economy."
  },
  {
    country: "Gibraltar",
    flag: "🇬🇮",
    description: "Strategic offshore location."
  },
  {
    country: "Greece",
    flag: "🇬🇷",
    description: "Mediterranean market access."
  },
  {
    country: "Greenland",
    flag: "🇬🇱",
    description: "Unique Arctic opportunities."
  },
  {
    country: "Grenada",
    flag: "🇬🇩",
    description: "Spice Isle business potential."
  },
  {
    country: "Guatemala",
    flag: "🇬🇹",
    description: "Central American trade hub."
  },
  {
    country: "Guernsey",
    flag: "🇬🇬",
    description: "Channel Islands financial center."
  },
  {
    country: "Guinea",
    flag: "🇬🇳",
    description: "West Africa’s resource base."
  },
  {
    country: "Guinea-Bissau",
    flag: "🇬🇼",
    description: "Emerging West African market."
  },
  {
    country: "Haiti",
    flag: "🇭🇹",
    description: "Caribbean rebuilding potential."
  },
  {
    country: "Hamriyah",
    flag: "🇦🇪",
    description: "UAE free zone opportunity."
  },
  {
    country: "Honduras",
    flag: "🇭🇳",
    description: "Central American growth market."
  },
  {
    country: "Hungary",
    flag: "🇭🇺",
    description: "Central Europe’s business hub."
  },
  {
    country: "Iceland",
    flag: "🇮🇸",
    description: "Nordic sustainability leader."
  },
  {
    country: "Iraq",
    flag: "🇮🇶",
    description: "Middle East reconstruction potential."
  },
  {
    country: "Ireland",
    flag: "🇮🇪",
    description: "Europe’s tech and tax haven."
  },
  {
    country: "Isle of Man",
    flag: "🇮🇲",
    description: "Offshore financial hub."
  },
  {
    country: "Israel",
    flag: "🇮🇱",
    description: "Middle East’s innovation center."
  },
  {
    country: "Italy",
    flag: "🇮🇹",
    description: "Style meets business success."
  },
  {
    country: "Ivory Coast",
    flag: "🇨🇮",
    description: "West Africa’s economic leader."
  },
  {
    country: "Jamaica",
    flag: "🇯🇲",
    description: "Caribbean cultural and trade hub."
  },
  {
    country: "Japan",
    flag: "🇯🇵",
    description: "Global tech and trade giant."
  },
  {
    country: "Jebel Ali",
    flag: "🇦🇪",
    description: "UAE’s premier free zone."
  },
  {
    country: "Jersey",
    flag: "🇯🇪",
    description: "Channel Islands offshore hub."
  },
  {
    country: "Jordan",
    flag: "🇯🇴",
    description: "Stable Middle East market."
  },
  {
    country: "Kazakhstan",
    flag: "🇰🇿",
    description: "Central Asia’s economic leader."
  },
  {
    country: "Kenya",
    flag: "🇰🇪",
    description: "East Africa’s business hub."
  },
  {
    country: "Kiribati",
    flag: "🇰🇮",
    description: "Pacific Island potential."
  },
  {
    country: "Korea",
    flag: "🇰🇷",
    description: "Tech-driven Asian powerhouse."
  },
  {
    country: "Kosovo",
    flag: "🇽🇰",
    description: "Emerging Balkan economy."
  },
  {
    country: "Kuwait",
    flag: "🇰🇼",
    description: "Gulf oil and trade hub."
  },
  {
    country: "Kyrgyzstan",
    flag: "🇰🇬",
    description: "Central Asia’s growth market."
  },
  {
    country: "Labuan",
    flag: "🇲🇾",
    description: "Malaysia’s offshore hub."
  },
  {
    country: "Laos",
    flag: "🇱🇦",
    description: "Southeast Asia’s hidden gem."
  },
  {
    country: "Latvia",
    flag: "🇱🇻",
    description: "Baltic business gateway."
  },
  {
    country: "Liberia",
    flag: "🇱🇷",
    description: "West Africa’s shipping hub."
  },
  {
    country: "Liechtenstein",
    flag: "🇱🇮",
    description: "Small but wealthy market."
  },
  {
    country: "Lithuania",
    flag: "🇱🇹",
    description: "Baltic tech and trade hub."
  },
  {
    country: "Luxembourg",
    flag: "🇱🇺",
    description: "Europe’s financial center."
  },
  {
    country: "Madagascar",
    flag: "🇲🇬",
    description: "Indian Ocean opportunity."
  },
  {
    country: "Madeira",
    flag: "🇵🇹",
    description: "Portugal’s offshore gem."
  },
  {
    country: "Malaysia",
    flag: "🇲🇾",
    description: "Southeast Asia’s trade hub."
  },
  {
    country: "Mali",
    flag: "🇲🇱",
    description: "West Africa’s resource potential."
  },
  {
    country: "Malta",
    flag: "🇲🇹",
    description: "Mediterranean tax haven."
  },
  {
    country: "Marshall Islands",
    flag: "🇲🇭",
    description: "Pacific offshore leader."
  },
  {
    country: "Massachusetts",
    flag: "🇺🇸",
    description: "U.S. innovation hub."
  },
  {
    country: "Mauritania",
    flag: "🇲🇷",
    description: "Northwest Africa’s potential."
  },
  {
    country: "Mexico",
    flag: "🇲🇽",
    description: "North America’s trade giant."
  },
  {
    country: "Moldova",
    flag: "🇲🇩",
    description: "Eastern Europe’s emerging market."
  },
  {
    country: "Monaco",
    flag: "🇲🇨",
    description: "Luxury business destination.",
  },
    {
    country: "Fiji",
    flag: "🇫🇯",
    description: "Pacific Island business destination."
  },
  {
    country: "French Polynesia",
    flag: "🇵🇫",
    description: "South Pacific tourism and trade hub."
  },
  {
    country: "Gambia",
    flag: "🇬🇲",
    description: "West Africa's emerging market."
  },
  {
    country: "Guam",
    flag: "🇬🇺",
    description: "Pacific U.S. territory with strategic location."
  },
  {
    country: "Hong Kong",
    flag: "🇭🇰",
    description: "Asia's world-class financial center."
  },
  {
    country: "Macau",
    flag: "🇲🇴",
    description: "Asia's gaming and tourism capital."
  },
  {
    country: "Maldives",
    flag: "🇲🇻",
    description: "Indian Ocean tourism and trade."
  },
  {
    country: "Mauritius",
    flag: "🇲🇺",
    description: "African offshore financial center."
  },
  {
    country: "Micronesia",
    flag: "🇫🇲",
    description: "Pacific Islands business potential."
  },
  {
    country: "Nauru",
    flag: "🇳🇷",
    description: "Pacific Island with economic potential."
  },
  {
    country: "Palau",
    flag: "🇵🇼",
    description: "Pacific Island tourism economy."
  },
  {
    country: "Samoa",
    flag: "🇼🇸",
    description: "Pacific Island nation with growth potential."
  },
  {
    country: "Solomon Islands",
    flag: "🇸🇧",
    description: "Pacific nation with resource potential."
  },
  {
    country: "Tonga",
    flag: "🇹🇴",
    description: "Pacific Kingdom with business opportunities."
  },
  {
    country: "Tuvalu",
    flag: "🇹🇻",
    description: "Small Pacific Island nation."
  },
  {
    country: "Vanuatu",
    flag: "🇻🇺",
    description: "Pacific Island offshore center."
  },
  {
    country: "Vatican City",
    flag: "🇻🇦",
    description: "World's smallest sovereign state."
  },
  {
    country: "Western Sahara",
    flag: "🇪🇭",
    description: "North African territory with potential."
  },
  {
    country: "Zimbabwe",
    flag: "🇿🇼",
    description: "Southern African nation with resources."
  },
  {
    country: "Antigua and Barbuda",
    flag: "🇦🇬",
    description: "Caribbean twin-island nation."
  },
  {
    country: "Saint Kitts and Nevis",
    flag: "🇰🇳",
    description: "Caribbean dual-island federation."
  },
  {
    country: "Saint Lucia",
    flag: "🇱🇨",
    description: "Caribbean island with tourism economy."
  },
  {
    country: "Trinidad and Tobago",
    flag: "🇹🇹",
    description: "Caribbean energy-based economy."
  },
  {
    country: "Comoros",
    flag: "🇰🇲",
    description: "Indian Ocean archipelago nation."
  },
  {
    country: "São Tomé and Príncipe",
    flag: "🇸🇹",
    description: "Central African island nation."
  },
  {
    country: "Timor-Leste",
    flag: "🇹🇱",
    description: "Southeast Asia's newest nation."
  },
  {
    country: "Suriname",
    flag: "🇸🇷",
    description: "South America's Dutch-speaking nation."
  },
  {
    country: "Eswatini",
    flag: "🇸🇿",
    description: "Southern African kingdom."
  },
  {
    country: "Lesotho",
    flag: "🇱🇸",
    description: "Mountain kingdom in Southern Africa."
  },
  {
    country: "Palestine",
    flag: "🇵🇸",
    description: "Middle Eastern emerging economy."
  },
  {
    country: "Somalia",
    flag: "🇸🇴",
    description: "Horn of Africa with coastal potential."
  },
  {
    country: "South Sudan",
    flag: "🇸🇸",
    description: "World's newest nation with oil resources."
  },
  {
    country: "Syria",
    flag: "🇸🇾",
    description: "Middle Eastern nation with reconstruction potential."
  },
  {
    country: "Yemen",
    flag: "🇾🇪",
    description: "Arabian Peninsula nation with strategic location."
  },
  {
    country: "Falkland Islands",
    flag: "🇫🇰",
    description: "South Atlantic British territory."
  },
  {
    country: "French Guiana",
    flag: "🇬🇫",
    description: "South American French department."
  },
  {
    country: "New Caledonia",
    flag: "🇳🇨",
    description: "Pacific French territory with nickel resources."
  },
  {
    country: "Réunion",
    flag: "🇷🇪",
    description: "Indian Ocean French department."
  },
  {
    country: "Aruba",
    flag: "🇦🇼",
    description: "Caribbean Dutch constituent country."
  },
  {
    country: "Curaçao",
    flag: "🇨🇼",
    description: "Caribbean Dutch autonomous country."
  },
  {
    country: "Sint Maarten",
    flag: "🇸🇽",
    description: "Caribbean Dutch constituent country."
  },
  {
    country: "Cook Islands",
    flag: "🇨🇰",
    description: "Pacific self-governing island nation."
  },
  {
    country: "Niue",
    flag: "🇳🇺",
    description: "Pacific self-governing island."
  },
  {
    country: "Tokelau",
    flag: "🇹🇰",
    description: "Pacific New Zealand territory."
  },
  {
    country: "American Samoa",
    flag: "🇦🇸",
    description: "Pacific U.S. territory."
  },
  {
    country: "Northern Mariana Islands",
    flag: "🇲🇵",
    description: "Pacific U.S. commonwealth."
  },
  {
    country: "Puerto Rico",
    flag: "🇵🇷",
    description: "Caribbean U.S. territory."
  },
  {
    country: "U.S. Virgin Islands",
    flag: "🇻🇮",
    description: "Caribbean U.S. territory."
  },
  {
    country: "British Virgin Islands",
    flag: "🇻🇬",
    description: "Caribbean British overseas territory."
  },
  {
    country: "Montserrat",
    flag: "🇲🇸",
    description: "Caribbean British overseas territory."
  },
  {
    country: "Turks and Caicos Islands",
    flag: "🇹🇨",
    description: "Caribbean British overseas territory."
  },
  {
    country: "Faroe Islands",
    flag: "🇫🇴",
    description: "North Atlantic autonomous Danish territory."
  },
  {
    country: "Åland Islands",
    flag: "🇦🇽",
    description: "Autonomous Finnish archipelago."
  },
  {
    country: "Svalbard",
    flag: "🇸🇯",
    description: "Norwegian Arctic archipelago."
  },
  {
    country: "Christmas Island",
    flag: "🇨🇽",
    description: "Australian Indian Ocean territory."
  },
  {
    country: "Cocos (Keeling) Islands",
    flag: "🇨🇨",
    description: "Australian Indian Ocean territory."
  },
  {
    country: "Norfolk Island",
    flag: "🇳🇫",
    description: "Australian external territory."
  },
  {
    country: "Pitcairn Islands",
    flag: "🇵🇳",
    description: "British Pacific territory."
  },
  {
    country: "Saint Helena",
    flag: "🇸🇭",
    description: "British South Atlantic territory."
  },
  {
    country: "French Southern Territories",
    flag: "🇹🇫",
    description: "French Southern and Antarctic lands."
  },
  {
    country: "Wallis and Futuna",
    flag: "🇼🇫",
    description: "French Pacific territory."
  },
  {
    country: "Mayotte",
    flag: "🇾🇹",
    description: "French Indian Ocean department."
  },
  {
    country: "Saint Pierre and Miquelon",
    flag: "🇵🇲",
    description: "French North Atlantic territory."
  }
];