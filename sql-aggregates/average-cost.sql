-- Find the average "replacementCost" of all of the "films" in the database.

select sum("replacementCost") as "totalCostToReplace"
from "films";
