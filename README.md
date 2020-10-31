Additional features:

1.  A better backing API would provide immense value, as all searching with partial match must be done on the front-end. PokeAPI unfortunately only allows for exact match. This would also enable a filter feature where you can fine tune by color, weight, height, type, etc.
2.  User Profiles are always preferred to persisting data in cookies, even if its as minimal as recent search history. Cookies will not be around forever.
3.  More drill in areas that the user can click to learn more about.

Assumptions on use cases:

1.  The page was optimized for mobile UX because I would assume ash is not lugging around a laptop to scan Pokemon.

Other technologies to use:

1.  A wrapping API in Amazon ElasticSearch to provide an actual search algorithm and better data structures
2.  Storybook (https://storybook.js.org/) would help for component prototyping
3.  JSS is preferable to SASS for its ability to be written in javascript and link into animation libraries like GSAP (https://greensock.com/react/) and Framer (https://www.framer.com/motion/)
4.  GraphQL would significantly reduce REST calls and allow for querying in a logical sense rather than chasing archaic data models.

Performance concerns:

1.  PokeAPI is really poorly designed with all the objects and calls you need to make to do simple things like a UX friendly search (ie. not just doing exact match).
2.  This leads to performance concerns as you need REST call after REST call just to gather all the information for a single pokemon. Why does the Pokemon model not have color? Why is that on Pokemon-Species. There are many cases where you question why they separated thir models the way they did. As I said previously, I believe a wrapping API in GraphQL would be a major boost to this project.

Visual enhancements:

1.  A real desktop view and not one that has been prioritized as mobile-first for the sake of project deadlines.
2.  Better animations.
