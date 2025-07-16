"use client";

import { useState } from "react";
import { CheckCircle, X, Globe } from "lucide-react";
import { motion } from "framer-motion";
import {
  businessData,
  getCountryDataUsingCountryCode,
} from "@/lib/businessData";
import { BusinessEntity } from "@/types/business";
import { useRouter } from "next/navigation";

const comparisonCriteria = [
  {
    key: "minimum_paid_up_share_capital",
    label: "Minimum Paid-up Share Capital",
  },
  {
    key: "australia_resident_director_partner_manager_required",
    label: "Australia Resident Director Required",
  },
  {
    key: "resident_director_manager_required",
    label: "Resident Director/Manager Required",
  },
  {
    key: "minimum_number_of_directors_managers_trustees",
    label: "Minimum Number of Directors/Managers/Trustees",
  },
  { key: "minimum_number_of_directors", label: "Minimum Number of Directors" },
  {
    key: "minimum_number_of_shareholders_partners_beneficiaries",
    label: "Minimum Number of Shareholders/Partners/Beneficiaries",
  },
  {
    key: "minimum_number_of_shareholders_required",
    label: "Minimum Number of Shareholders Required",
  },
  {
    key: "director_ID_required_for_directors_in_all_entities",
    label: "Director ID Required",
  },
  { key: "corporate_directors_allowed", label: "Corporate Directors Allowed" },
  {
    key: "individual_shareholders_allowed",
    label: "Individual Shareholders Allowed",
  },
  {
    key: "corporate_shareholders_allowed",
    label: "Corporate Shareholders Allowed",
  },
  { key: "is_statutory_audit_mandatory", label: "Statutory Audit Mandatory" },
  { key: "statutory_audit_required", label: "Statutory Audit Required" },
  {
    key: "statutory_audit_mandatory",
    label: "Statutory Audit Mandatory (Alt)",
  },
  {
    key: "must_file_annual_australian_tax_return",
    label: "Must File Annual Australian Tax Return",
  },
  { key: "annual_tax_return_required", label: "Annual Tax Return Required" },
  { key: "must_file_annual_tax_return", label: "Must File Annual Tax Return" },
  {
    key: "must_file_annual_financial_statements",
    label: "Must File Annual Financial Statements",
  },
  { key: "must_file_annual_return", label: "Must File Annual Return" },
  {
    key: "access_to_double_taxation_treaties",
    label: "Access to Double Taxation Treaties",
  },
];

export default function BusinessEntitiesComparison() {
  const router = useRouter();
  // Initialize with the country code
  const [selectedCountry, setSelectedCountry] = useState("SG");

  const selectedCountryData = getCountryDataUsingCountryCode(selectedCountry);
  const hasSelectedCountryData =
    selectedCountryData && selectedCountryData.entities;

  const handleAllCountriesClick = () => {
    router.push("/countries");
  };

  const renderValue = (value: string) => {
    if (!value) return <span className="text-sm text-gray-400">N/A</span>;

    if (value.toLowerCase() === "yes") {
      return <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />;
    } else if (value.toLowerCase() === "no") {
      return <X className="h-5 w-5 text-red-400 mx-auto" />;
    } else {
      return <span className="text-sm text-gray-700 text-center">{value}</span>;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Country Selection */}
      <div className="mb-8">
        <p className="text-center text-gray-600 mb-6">
          Choose a country to view and compare different business entity types
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center">
          {businessData.map((country) => {
            const isSelected = selectedCountry === country.countryCode;
            const hasData = country.entities.length > 0;

            return (
              <motion.div
                key={country.countryCode}
                className={`relative flex w-28 flex-col items-center justify-center p-4 rounded-xl transition-all cursor-pointer ${
                  isSelected
                    ? "bg-rose-100 border-2 border-rose-500 shadow-md"
                    : hasData
                    ? "bg-white shadow-sm hover:shadow-md border-2 border-transparent hover:border-rose-200"
                    : "bg-gray-100 shadow-sm border-2 border-transparent opacity-50 cursor-not-allowed"
                }`}
                whileHover={hasData ? { scale: 1.05 } : {}}
                whileTap={hasData ? { scale: 0.95 } : {}}
                onClick={() =>
                  hasData && setSelectedCountry(country.countryCode)
                }
              >
                <div className="text-4xl mb-2">{country.flag}</div>
                <p className="text-sm font-medium text-center">
                  {country.country}
                </p>

                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-1 right-1"
                  >
                    <CheckCircle className="h-5 w-5 text-rose-500" />
                  </motion.div>
                )}

                {!hasData && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-2 text-xs text-gray-500 font-medium"
                  >
                    Coming Soon
                  </motion.div>
                )}
              </motion.div>
            );
          })}

          {/* All Countries Button */}
          <motion.div
            className="relative flex w-28 flex-col items-center justify-center p-4 rounded-xl transition-all cursor-pointer bg-gradient-to-br from-logo-primary to-logo-secondary shadow-lg hover:shadow-xl border-2 border-transparent hover:border-primary-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAllCountriesClick}
          >
            <Globe className="h-8 w-8 text-white mb-2" />
            <p className="text-sm font-medium text-center text-white">
              All Countries
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-1 text-xs text-blue-100 font-medium text-center"
            >
              View All
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Business Entities Comparison Table */}
      {hasSelectedCountryData && selectedCountryData.entities.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border rounded-lg overflow-hidden shadow-lg"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 sticky left-0 bg-gray-50 border-r border-gray-200 min-w-[200px]">
                    Criteria
                  </th>
                  {selectedCountryData.entities.map((entity, index) => (
                    <th
                      key={index}
                      className="px-4 py-4 text-center text-sm font-semibold text-gray-900 min-w-[150px]"
                    >
                      <div className="space-y-1">
                        <div className="font-medium">{entity.type}</div>
                        {entity.also_known_as && (
                          <div className="text-xs text-gray-500 font-normal">
                            ({entity.also_known_as})
                          </div>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonCriteria.map((criterion, index) => {
                  // Check if any entity has this criterion
                  const hasData = selectedCountryData.entities.some(
                    (entity) =>
                      entity[criterion.key as keyof BusinessEntity] !==
                      undefined
                  );

                  if (!hasData) return null;

                  return (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-white border-r border-gray-200">
                        {criterion.label}
                      </td>
                      {selectedCountryData.entities.map(
                        (entity, entityIndex) => (
                          <td
                            key={entityIndex}
                            className="px-4 py-4 text-center align-middle"
                          >
                            {renderValue(
                              entity[criterion.key as keyof BusinessEntity] ||
                                ""
                            )}
                          </td>
                        )
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}

      {(!hasSelectedCountryData ||
        selectedCountryData.entities.length === 0) && (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">
            Business entity data for{" "}
            {selectedCountryData?.country || "this country"} is coming soon
          </p>
          <p className="text-sm mt-2">
            Please select a country with available data to view comparisons
          </p>
        </div>
      )}
    </div>
  );
}
