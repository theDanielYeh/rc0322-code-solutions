-- List the genres of movies (and how many) that 'Lisa Monroe' appeared in. She appeared in a lot of films!

-- actors: actorId firstName lastName
-- castMembers: actorId filmId
-- genres: genreId name
-- filmGenre: filmId genreId

select "genres"."name" as "genreName",
count("castMembers"."filmId") as "numberOfFilms"
from "genres"
join "filmGenre" using ("genreId")
join "castMembers" using ("filmId")
join "actors" using ("actorId")
where "actors"."firstName" = 'Lisa'
and "actors"."lastName" = 'Monroe'
group by "genreName"
order by "numberOfFilms";
