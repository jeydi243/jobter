import { Controller, Get, Res, HttpStatus, Post, Body, NotFoundException, Param } from '@nestjs/common';
import { SeekerService } from './seeker.service';
import { CreateSeekerDTO } from './dto/create-seeker.dto';

@Controller('customer')
export class SeekerController {
    constructor(private seekerService: SeekerService) { }

    // add a customer
    @Post('/create')
    async addSeeker(@Res() res, @Body() createCustomerDTO: CreateSeekerDTO) {
        const seeker = await this.seekerService.addCustomer(createCustomerDTO);
        return res.status(HttpStatus.OK).json({
            message: "Customer has been created successfully",
            seeker
        })
    }

    // Retrieve customers list
    @Get('customers')
    async getAllCustomer(@Res() res) {
        const seekers = await this.seekerService.getAllCustomer();
        return res.status(HttpStatus.OK).json(seekers);
    }

    // Fetch a particular customer using ID
    @Get('customer/:customerID')
    async getCustomer(@Res() res, @Param('customerID') customerID) {
        const seeker = await this.seekerService.getCustomer(customerID);
        if (!seeker) throw new NotFoundException('Customer does not exist!');
        return res.status(HttpStatus.OK).json(seeker);
    }
}