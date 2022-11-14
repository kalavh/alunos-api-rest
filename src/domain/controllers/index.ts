import { Controller, Get, Response } from "@decorators/express";

@Controller("/")
export class HelloWolrd {
  constructor() {}

  @Get("/")
  getData(@Response() res: any) {
    res.send("Hello WOLRD DECORATOR");
  }
}