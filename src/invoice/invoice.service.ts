import { HttpException, Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Invoice } from './entities/invoice.entity';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>,
  ) {}
  async create(createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    const invoiceData = await this.invoiceRepository.create(createInvoiceDto);
    return this.invoiceRepository.save(invoiceData);
  }

  async findAll(): Promise<Invoice[]> {
    return await this.invoiceRepository.find();
  }

  async findOne(invoice_no: number): Promise<Invoice> {
    const invoiceData = await this.invoiceRepository.findOneBy({ invoice_no });
    if (!invoiceData) {
      throw new HttpException('Invoice Not Found', 404);
    }
    return invoiceData;
  }

  async update(
    invoice_no: number,
    updateInvoiceDto: UpdateInvoiceDto,
  ): Promise<Invoice> {
    const existingInvoice = await this.findOne(invoice_no);
    const invoiceData = await this.invoiceRepository.merge(
      existingInvoice,
      updateInvoiceDto,
    );
    return await this.invoiceRepository.save(invoiceData);
  }

  async remove(invoice_no: number): Promise<Invoice> {
    const existingInvoice = await this.findOne(invoice_no);
    return await this.invoiceRepository.remove(existingInvoice);
  }
}
