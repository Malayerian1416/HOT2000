<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HouseFileRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            "companyId" => "required|numeric",
            "fileId" => "required|string",
            "clientFirstName" => "required|string",
            "clientLastName" => "required|string",
            "clientPhone" => "sometimes|nullable",
            "clientEmail" => "sometimes|nullable",
            "street" => "required|string",
            "unit" => "sometimes|nullable",
            "city" => "required|string",
            "region" => "required|string",
            "postalCode" => "required|string",
            "notes" => "sometimes|nullable"
        ];
    }

    public function messages(): array
    {
        return [
            "companyId.required" => "Company id is required",
            "fileId.required" => "FileId is required",
            "clientFirstName.required" => "Client first name is required",
            "clientLastName.required" => "Client last name is required",
            "street.required" => "Street is required",
            "city.required" => "City is required",
            "region.required" => "Region is required",
            "postalCode.required" => "Postal code is required",
        ];
    }
}
