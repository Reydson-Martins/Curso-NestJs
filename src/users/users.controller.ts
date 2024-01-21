import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { randomUUID } from 'crypto';

type ParamsUser = {
  id: string;
  idEmpresa: string;
};
type QueryUser = {
  p: string;
  r?: string;
};
type BodyUser = {
  name: string;
  age: number;
};

@Controller('/users')
export class UserController {
  @Get('/:id/:idEmpresa')
  /* http://localhost:3000/users/id  (params) obrigatorio*/
  findById(@Param() params: ParamsUser) {
    return 'Usuario do Id' + params.id + '- Empresa ID' + params.idEmpresa;
  }

  /* http://localhost:3000/users/findByPages?p=10&r=100  (query params) */
  @Get('/findByPages')
  findByPages(@Query() queries: QueryUser) {
    return 'Queries' + queries.p;
  }

  @Post('/create')
  create(@Body() data: BodyUser) {
    return {
      ...data,
      id: randomUUID(),
    };
  }
}
