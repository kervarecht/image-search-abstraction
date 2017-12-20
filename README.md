Image Search Abstraction Project
=========================

FCC Back-end project

Custom google search API

Project takes 2 parameters at "/" - Query and Offset and returns JSON format info containing image URL, Title and page URL.

Offset must be a number and is parsed as second argument in this format:

/?search=<search>&offset=<number-of-pages>
  
Returns 10 results a page.

Uses npm google-search library to build and parse custom search.
