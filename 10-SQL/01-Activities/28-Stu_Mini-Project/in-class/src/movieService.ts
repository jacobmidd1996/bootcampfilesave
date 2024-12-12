import {  type Response } from 'express';

import { QueryResult } from 'pg';

export function addMovie(movieName: string, pool: any, response: Response) {
  pool.query('INSERT INTO movies (movie_name) VALUES ($1)', [movieName], (err: Error, result: QueryResult) => {
    if (err) {
      console.log(err);
      response.status(500).end();
    } else if (result) {
      // console.log(result.rows);
      response.status(201).json(result.rows[0]);
      // If this were an inquirer app, here we woule...
      //    1. maybe display output (like a table of employees)
      //    2. call my mainMenu() function again to kick off the inquirer menu
    }
  });
}