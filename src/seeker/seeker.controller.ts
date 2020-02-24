import { Controller, Get, Res, HttpStatus, Post, Body, NotFoundException, Param,Put,Delete,Query } from '@nestjs/common';
import { SeekerService } from './seeker.service';
import { CreateSeekerDTO } from './dto/create-seeker.dto';

@Controller('customer')
export class SeekerController {
    constructor(private seekerService: SeekerService) { }

    @Post('/create')
    async addSeeker(@Res() res, @Body() createCustomerDTO: CreateSeekerDTO) {
        const seeker = await this.seekerService.addCustomer(createCustomerDTO);
        return res.status(HttpStatus.OK).json({
            message: "Un candidat a bien été enregistré",
            seeker
        })
    }

    @Get('customers')
    async getAllCustomer(@Res() res) {
        const seekers = await this.seekerService.getAllCustomer();
        return res.status(HttpStatus.OK).json(seekers);
    }

    @Get('customer/:customerID')
    async getCustomer(@Res() res, @Param('customerID') customerID) {
        const seeker = await this.seekerService.getCustomer(customerID);
        if (!seeker) throw new NotFoundException("le Candidat n'existe pas");
        return res.status(HttpStatus.OK).json(seeker);
    }

    @Put('/update')
    async updateCustomer(@Res() res, @Query('customerID') customerID, @Body() createCustomerDTO: CreateSeekerDTO) {
        const seeker = await this.seekerService.updateCustomer(customerID, createCustomerDTO);
        if (!seeker) throw new NotFoundException(" le Candidat n'existe pas!");
        return res.status(HttpStatus.OK).json({
            message: 'Le candidat a bien été mis a jour! ',
            seeker
        });
    }

    @Delete('/delete')
    async deleteCustomer(@Res() res, @Query('customerID') customerID) {
        const seeker = await this.seekerService.deleteCustomer(customerID);
        if (!seeker) throw new NotFoundException('Customer does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Customer has been deleted',
            seeker
        })
    }
}