-- Find the total number of physical DVDs in "inventory". This should include all DVDs in all stores.

select count("inventoryId") as "totalDvds"
from "inventory";
