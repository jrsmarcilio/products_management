import {
  Repository,
  DeepPartial,
  FindManyOptions,
  FindOptionsWhere,
} from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

interface HasId {
  id: number;
}

@Injectable()
export class BaseRepository<T extends HasId> {
  private readonly repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this.repository = repository;
  }

  // Método para encontrar todos os registros
  findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return this.repository.find(options);
  }

  // Método para encontrar um único registro por ID
  async findOneById(id: number): Promise<T> {
    const entity = await this.repository.findOne({
      where: { id } as FindOptionsWhere<T>,
    });
    if (!entity) {
      throw new NotFoundException(`Entity not found`);
    }
    return entity;
  }

  // Método para criar uma nova entidade
  create(createData: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(createData);
    return this.repository.save(entity);
  }

  // Método para atualizar uma entidade por ID
  async update(id: number, updateData: DeepPartial<T>): Promise<T> {
    await this.repository.update(
      { id } as FindOptionsWhere<T>,
      {
        ...updateData,
      } as QueryDeepPartialEntity<T>,
    );
    return this.findOneById(id);
  }

  // Método para deletar uma entidade por ID
  async delete(id: number): Promise<{ deleted: boolean }> {
    const result = await this.repository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Entity with id ${id} not found`);
    }

    return { deleted: true };
  }
}
