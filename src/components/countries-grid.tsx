"use client";
import { businessData, upcomingCountries } from "@/lib/businessData";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, MapPin, Search, X } from "lucide-react";
import { useMemo, useState, ChangeEvent } from "react";
import { BusinessEntity, CountryData, UpcomingCountry } from "@/types/business";

const CountriesGrid: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedEntityTypes, setSelectedEntityTypes] = useState<string[]>([]);
  const [minEntities, setMinEntities] = useState<string>("");

  // Filter countries based on search term, entity types, and minimum entities
  const filteredCountries = useMemo<CountryData[]>(() => {
    return businessData.filter((country: CountryData) => {
      const matchesSearch = country.country
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesEntityType =
        selectedEntityTypes.length === 0 ||
        selectedEntityTypes.some((selectedType: string) =>
          country.entities.some(
            (entity: BusinessEntity) => entity.type === selectedType
          )
        );

      const matchesMinEntities =
        !minEntities || country.entities.length >= parseInt(minEntities, 10);

      return matchesSearch && matchesEntityType && matchesMinEntities;
    });
  }, [searchTerm, selectedEntityTypes, minEntities, businessData]);

  // Filter upcoming countries based on search term only (they don't have entities or other filterable data)
  const filteredUpcomingCountries = useMemo<UpcomingCountry[]>(() => {
    if (!searchTerm) return upcomingCountries;

    return upcomingCountries.filter((country: UpcomingCountry) =>
      country.country.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleEntityTypeToggle = (entityType: string): void => {
    setSelectedEntityTypes((prev: string[]) =>
      prev.includes(entityType)
        ? prev.filter((type: string) => type !== entityType)
        : [...prev, entityType]
    );
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  const clearFilters = (): void => {
    setSearchTerm("");
    setSelectedEntityTypes([]);
    setMinEntities("");
  };

  const hasActiveFilters: boolean = Boolean(
    searchTerm || selectedEntityTypes.length > 0 || minEntities
  );

  const totalFilteredResults =
    filteredCountries.length + filteredUpcomingCountries.length;
  const totalCountries = businessData.length + upcomingCountries.length;

  return (
    <>
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center text-2xl mb-8">
            Popular countries for business registration
          </div>

          {/* Filter Section */}
          <div className="max-w-6xl mx-auto mb-8">
            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search countries..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
            </div>

            {/* Active Filters Display */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mt-4">
                {searchTerm && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-sm">
                    Search: &quot;{searchTerm}&quot;
                    <button onClick={() => setSearchTerm("")} type="button">
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                {selectedEntityTypes.map((type: string) => (
                  <span
                    key={type}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {type}
                    <button
                      onClick={() => handleEntityTypeToggle(type)}
                      type="button"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
                {minEntities && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Min {minEntities} entities
                    <button onClick={() => setMinEntities("")} type="button">
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="max-w-6xl mx-auto mb-6">
            <p className="text-gray-600">
              Showing {totalFilteredResults} of {totalCountries} countries
            </p>
          </div>

          {/* Countries Grid */}
          {filteredCountries.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              {filteredCountries.map((country: CountryData) => (
                <div
                  key={country.country}
                  className="flex flex-col p-6 bg-white border border-rose-100 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="mb-4 relative w-full h-40 overflow-hidden rounded-lg">
                    <Image
                      fill
                      src={country.image}
                      alt={`${country.country} flag`}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-rose-100 w-fit mr-3">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{country.country}</h3>
                  </div>

                  <p className="text-gray-500 mb-4 flex-grow">
                    {country.entities.length} business entity types available
                    for registration.
                  </p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">
                      Available entities:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {country.entities.slice(0, 3).map((entity, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-rose-50 text-rose-700 text-xs rounded-full"
                        >
                          {entity.type}
                        </span>
                      ))}
                      {country.entities.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{country.entities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Link
                      className={buttonVariants({ variant: "default" })}
                      href={`/countries/${country.country
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Upcoming Countries Section */}
          {filteredUpcomingCountries.length > 0 && (
            <>
              <div className="text-center text-xl mb-8 text-gray-700">
                {searchTerm ? "Matching" : "More"} Countries
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {filteredUpcomingCountries.map((country: UpcomingCountry) => (
                  <div
                    key={country.country}
                    className="flex flex-col p-6 bg-white border border-rose-100 rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full bg-rose-100 w-fit mr-3">
                        <div className="text-4xl text-center">
                          {country.flag}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold">{country.country}</h3>
                        <p className="text-gray-500 mb-4">
                          {country.description}
                        </p>
                      </div>
                    </div>
                    <div></div>

                    <div className="flex justify-end">
                      <Link
                        className={buttonVariants({ variant: "default" })}
                        href={`/schedule-consultation`}
                      >
                        Know More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* No Results Message */}
          {totalFilteredResults === 0 && (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-500 mb-2">
                No countries match your filters
              </div>
              <button
                onClick={clearFilters}
                className="text-rose-600 hover:text-rose-700 underline"
                type="button"
              >
                Clear filters to see all countries
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CountriesGrid;
