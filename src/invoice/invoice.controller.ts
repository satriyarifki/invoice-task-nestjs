import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  async create(@Body() createInvoiceDto: CreateInvoiceDto) {
    try {
      console.log(createInvoiceDto);
      await this.invoiceService.create(createInvoiceDto);

      return {
        success: true,
        message: 'Invoice Created Successfully',
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
      const data = await this.invoiceService.findAll();
      return {
        success: true,
        data,
        message: 'Invoices Fetched Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Get(':id')
  async findOne(@Param('id') invoice_no: number) {
    try {
      const data = await this.invoiceService.findOne(invoice_no);
      return {
        success: true,
        data,
        message: 'Invoice Fetched Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Patch(':id')
  async update(
    @Param('id') invoice_no: number,
    @Body() updateInvoiceDto: UpdateInvoiceDto,
  ) {
    try {
      await this.invoiceService.update(invoice_no, updateInvoiceDto);
      return {
        success: true,
        message: 'Invoice Updated Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Delete(':id')
  async remove(@Param('id') invoice_no: number) {
    try {
      const data = await this.invoiceService.findOne(invoice_no);
      return {
        success: true,
        data,
        message: 'Invoice Remove Successfully ',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
