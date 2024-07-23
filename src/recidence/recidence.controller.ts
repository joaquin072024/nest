import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateRecidenceDto } from './dto/create-recidence.dto';
import { UpdateRecidenceDto } from './dto/update-recidence.dto';
import { RecidenceService } from './recidence.service';

@Controller('recidence')
export class RecidenceController {
  constructor(private readonly recidenceService: RecidenceService) {}

  @Post()
  create(@Body() createRecidenceDto: CreateRecidenceDto) {
    return this.recidenceService.create(createRecidenceDto);
  }

  @Get()
  findAll() {
    return this.recidenceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recidenceService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecidenceDto: UpdateRecidenceDto) {
    return this.recidenceService.update(id, updateRecidenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recidenceService.remove(id);
  }
}
