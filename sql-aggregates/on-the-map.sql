-- List the number of "cities" per country in the "countries" table.

select "countries"."name",
count("cities"."name") as "numberOfCities"
from "cities"
join "countries" using ("countryId")
group by "countries"."name"
order by "numberOfCities" desc;
