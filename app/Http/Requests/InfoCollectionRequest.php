<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class InfoCollectionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            "name" => "required",
            "collection" => "required",
        ];
    }

    public function messages(): array
    {
        return [
            "name.required" => "Please provide the name for the information collection.",
            "collection.required" => "Please enter at least one item for the collection.",
        ];
    }
}
