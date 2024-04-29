import { next } from '@vercel/edge'

export async function middleware (req, res, next) {
    res.send("hello world");
  }