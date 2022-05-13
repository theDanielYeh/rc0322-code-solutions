-- -- Find the first and last name of every customer who rented 'Magic Mallrats'.
-- customers customerId storeId addressId
-- rentals: rentalId inventoryId staffId customerId
-- inventory: inventoryId filmId
-- films: filmId



select "firstName", "lastName"
from "customers"
join "rentals" using ("customerId")
join "inventory" using ("inventoryId")
join "films" using ("filmId");
