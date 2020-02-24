import { Controller, Get, Res, HttpStatus, Post, Body, NotFoundException, Param } from '@nestjs/common';
import { SeekerService } from './seeker.service';
import { CreateSeekerDTO } from './dto/create-seeker.dto';

@Controller('customer')
export class SeekerController {
    constructor(private seekerService: SeekerService) { }

    // add a customer
    @Post('/create')
    async addSeeker(@Res() res, @Body() createCustomerDTO: CreateSeekerDTO) {
        const customer = await this.seekerService.addCustomer(createCustomerDTO);
        return res.status(HttpStatus.OK).json({
            message: "Customer has been created successfully",
            customer
        })
    }

    // Retrieve customers list
    @Get('customers')
    async getAllCustomer(@Res() res) {
        const customers = await this.seekerService.getAllCustomer();
        return res.status(HttpStatus.OK).json(customers);
    }

    // Fetch a particular customer using ID
    @Get('customer/:customerID')
    async getCustomer(@Res() res, @Param('customerID') customerID) {
        const customer = await this.seekerService.getCustomer(customerID);
        if (!customer) throw new NotFoundException('Customer does not exist!');
        return res.status(HttpStatus.OK).json(customer);
    }
}