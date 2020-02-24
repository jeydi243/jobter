import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Seeker } from './interface/seeker.interface';
import { CreateSeekerDTO } from './dto/create-seeker.dto';

@Injectable()
export class SeekerService {
    constructor(@InjectModel('Seeker') private readonly seekerModel: Model<Seeker>) { }
    
    async getAllCustomer(): Promise<Seeker[]> {
        const Seekers = await this.seekerModel.find().exec();
        return Seekers;
    }
  
    async getCustomer(customerID): Promise<Seeker> {
        const seeker = await this.seekerModel.findById(customerID).exec();
        return seeker;
    }

    async addCustomer(createCustomerDTO: CreateSeekerDTO): Promise<Seeker> {
        const newSeeker = await this.seekerModel(createCustomerDTO);
        return newSeeker.save();
    }
    
    async updateCustomer(customerID, createCustomerDTO: CreateSeekerDTO): Promise<Seeker> {
        const updatedCustomer = await this.seekerModel
            .findByIdAndUpdate(customerID, createCustomerDTO, { new: true });
        return updatedCustomer;
    }
    
    async deleteCustomer(customerID): Promise<any> {
        const deletedCustomer = await this.seekerModel.findByIdAndRemove(customerID);
        return deletedCustomer;
    }
}