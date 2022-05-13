-- List the first and last name of all customers, plus the total amount they've spent on rentals. Order them by total paid, descending.

-- Hint: Karl Seal should be first with $221.55 paid.

-- customers: customerId storeId firstName lastName
-- rentals: rentalId customerId
-- payments: paymentId customerId rentalId amount

select "customers"."firstName",
"customers"."lastName",
sum("payments"."amount") as "totalWasted"
from "customers"
join "payments" using ("customerId")
group by "customerId"
order by "totalWasted" desc;
