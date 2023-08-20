import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateUserDTO) {
    return this.prisma.user.create({ data });
  }

  async list() {
    return this.prisma.user.findMany();
  }

  async show(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, { birthAt, ...restData }: UpdatePutUserDTO) {
    const data = { ...restData, birthAt: birthAt ? new Date(birthAt) : null };
    return this.prisma.user.update({
      data,
      where: { id },
    });
  }

  async updatePartial(
    id: number,
    { birthAt, ...restData }: UpdatePatchUserDTO,
  ) {
    const data = {
      ...restData,
      ...(birthAt ? { birthAt: new Date(birthAt) } : {}),
    };
    return this.prisma.user.update({
      data,
      where: { id },
    });
  }
}
