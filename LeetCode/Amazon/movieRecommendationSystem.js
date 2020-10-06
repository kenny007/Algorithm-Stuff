/**
 * 1. You are in-charge of building an in-flight media system as part of a special team within Amazon Video.
This product has already been contracted by several airlines and has received feedback from 
passengers complaining that their plane lands before they get to see the ending of their 
movie. To improve the customer experience, you are tasked with building a feature for choosing 
two movies whose combined runtime will be exactly 30 minutes before the flight lands.

You are given the flight duration (in minutes) and a list of durations (in minutes) of N movies 
and you have to play the movies for the passengers of the flight. Each movie is assigned a 
unique ID, numbered from 0 to N-1. The passengers begin watching movies as soon as the flight 
takes off with each movie played back-to-back.
Passengers watch exactly two movies and no movie is played twice. If there are 
multiple combinations of movies, select the combination with the longest movie.

Write an algorithm to output a pair of movie IDs that finish exactly 30minutes 
before the plane lands.

Assumptions:
1. You will pick exactly 2 movies
2. You cannot pick the same movie twice
3. If you have multiple pairs with the same total time, select the pair with the 
longest movie.
4. There are at least two movies available


Input
The input to the function/method consistes of two arguments: flightDuration, an 
integer representing the duration
of the flight; movieDuration, a list of integers representing the duration of the 
movies.


Output
Return a pair of integers as a list representing the IDs of two movies whose 
combined runtime will finish 
exactly 30 minutes before the flight lands. If no such pair is possible, return a 
pair with < -1,-1 >

Example
Input:
flightDuration = 90
movieDuration = [1, 10, 25, 35, 60]

Output:
[2, 3]

Explanation:
During the flight duration of 30 minutes, the passengers watch the third (ID-2) 
and fourth (ID-3) movie which
exactly ends 30 minutes before the flight lands.
 *
 *
 *
 */

var chooseMovies = (flightDuration, movieDuration) => {
  const start = 0, end = movieDuration.length - 1;
  const duration = flightDuration - 30;

  while (start < end) {
    if (movieDuration[start] + movieDuration[end] > duration) {
      end--;
      continue;
    } else if (movieDuration[start] + movieDuration[end] < duration) {
      start++;
      continue;
    } else if (movieDuration[start] + movieDuration[end] === duration) {
      return [start, end]
    }
  }

  return [-1, -1];
}
