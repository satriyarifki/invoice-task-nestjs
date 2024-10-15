import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  async create(@Body() createItemDto: CreateItemDto) {
    try {
      await this.itemService.create(createItemDto);

      return {
        success: true,
        message: 'Item Created Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Get()
  async findAll() {
    try {
      const data = await this.itemService.findAll();

      return {
        success: true,
        data,
        message: 'Item Get Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const data = await this.itemService.findOne(+id);

      return {
        success: true,
        data,
        message: 'Item Get Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    try {
      await this.itemService.update(+id, updateItemDto);

      return {
        success: true,
        message: 'Item Successfully Updated',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const data = await this.itemService.remove(+id);

      return {
        success: true,
        data,
        message: 'Item Successfully Removed',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
