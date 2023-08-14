import { Request } from 'express';
import { REQUEST } from '@nestjs/core';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { Inject, Injectable, Scope } from '@nestjs/common';


@Injectable({ scope: Scope.REQUEST })
export class RatesService {

  constructor(@Inject(REQUEST) private readonly request: Request) {}

  create(createRateDto: CreateRateDto) {
    return {authUser:this.request.user}

  }

  findAll() {
    return `This action returns all rates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rate`;
  }

  update(id: number, updateRateDto: UpdateRateDto) {
    return `This action updates a #${id} rate`;
  }

  remove(id: number) {
    return `This action removes a #${id} rate`;
  }
}
