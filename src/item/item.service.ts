import { HttpException, Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}
  async create(createItemDto: CreateItemDto): Promise<Item> {
    const itemData = await this.itemRepository.create(createItemDto);
    return this.itemRepository.save(itemData);
  }

  async findAll(): Promise<Item[]> {
    return await this.itemRepository.find();
  }

  async findOne(id: number): Promise<Item> {
    const itemData = await this.itemRepository.findOneBy({ id });
    if (!itemData) {
      throw new HttpException('Item Not Found', 404);
    }
    return itemData;
  }

  async update(id: number, updateItemDto: UpdateItemDto): Promise<Item> {
    const itemExist = await this.findOne(id);
    const itemData = await this.itemRepository.merge(itemExist, updateItemDto);

    return await this.itemRepository.save(itemData);
  }

  async remove(id: number): Promise<Item> {
    const itemExist = await this.findOne(id);
    if (!itemExist) {
      throw new HttpException('Item Not Found', 404);
    }
    return await this.itemRepository.remove(itemExist);
  }
}
