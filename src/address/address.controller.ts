import { Body, Controller, HttpCode, Param, ParseIntPipe, Post } from "@nestjs/common";
import { AddressService } from "./address.service";
import { WebResponse } from "src/model/web.model";
import { AddressResponse, CreateAddressRequest } from "src/model/address.model";
import { Auth } from "src/common/auth.decorator";
import { User } from "generated/prisma";

@Controller('/api/contacts/:contactId/addresses')
export class AddressController {
    constructor(private addressService: AddressService) { }

    @Post()
    @HttpCode(200)
    async create(@Auth() user: User, @Param('contactId', ParseIntPipe) contactId: number, @Body() request: CreateAddressRequest): Promise<WebResponse<AddressResponse>> {
        request.contact_id = contactId
        const result = await this.addressService.create(user, request)
        return {
            data: result
        }
    }
}