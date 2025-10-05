import { HttpException, Inject, Injectable } from "@nestjs/common";
import { Address, User } from "generated/prisma";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { PrismaService } from "src/common/prisma.service";
import { ValidationService } from "src/common/validation.service";
import { AddressResponse, CreateAddressRequest, GetAddressRequest, UpdateAddressRequest } from "src/model/address.model";
import { Logger } from "winston";
import { AddressValidation } from "./address.validation";
import { ContactService } from "src/contact/contact.service";

@Injectable()
export class AddressService {
    constructor(
        private prismaService: PrismaService,
        private validationService: ValidationService,
        private contactService: ContactService,
        @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger
    ) { }

    async checkAddressMustExists(addressId: number, contactId: number): Promise<Address> {
        const address = await this.prismaService.address.findFirst({
            where: {
                id: addressId,
                contact_id: contactId
            }
        })

        if (!address) {
            throw new HttpException('Address is not found', 404)
        }

        return address
    }

    async create(user: User, request: CreateAddressRequest): Promise<AddressResponse> {
        const createRequest =
            this.validationService.validate(AddressValidation.CREATE, request) as CreateAddressRequest

        await this.contactService.checkContactMustExists(user.username, createRequest.contact_id)

        const address = await this.prismaService.address.create({
            data: createRequest
        })

        return {
            id: address.id,
            street: address.street!,
            city: address.city!,
            province: address.province!,
            country: address.country,
            postal_code: address.postal_code
        }
    }

    async get(user: User, request: GetAddressRequest): Promise<AddressResponse> {
        const getRequest =
            this.validationService.validate(AddressValidation.GET, request) as GetAddressRequest

        await this.contactService.checkContactMustExists(user.username, getRequest.contact_id)

        const address = await this.checkAddressMustExists(getRequest.address_id, getRequest.contact_id)

        return {
            id: address.id,
            street: address.street!,
            city: address.city!,
            province: address.province!,
            country: address.country,
            postal_code: address.postal_code
        }
    }

    async update(user: User, request: UpdateAddressRequest): Promise<AddressResponse> {
        const updateRequest =
            this.validationService.validate(AddressValidation.UPDATE, request) as UpdateAddressRequest

        await this.contactService.checkContactMustExists(user.username, updateRequest.contact_id)

        let address = await this.checkAddressMustExists(updateRequest.id, updateRequest.contact_id)

        address = await this.prismaService.address.update({
            where: {
                id: address.id,
                contact_id: address.contact_id
            },
            data: updateRequest
        })

        return {
            id: address.id,
            street: address.street!,
            city: address.city!,
            province: address.province!,
            country: address.country,
            postal_code: address.postal_code
        }
    }
}