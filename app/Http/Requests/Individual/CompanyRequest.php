<?php

namespace App\Http\Requests\Individual;

use Illuminate\Foundation\Http\FormRequest;

class CompanyRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            "name" => "required|string",
            "fileID" => "required|string",
            "email" => "nullable|email",
            "phone" => "required|string",
            "description" => "nullable",
        ];
    }

    public function messages(): array
    {
        return [
          "name.required" => "Please enter the company name",
          "fileID.required" => "Please enter the company start file ID",
          "email.email" => "The email format has not been entered correctly",
          "phone.required" => "Please enter the company phone number",
        ];
    }
}
