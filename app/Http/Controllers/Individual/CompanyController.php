<?php

namespace App\Http\Controllers\Individual;

use App\Http\Controllers\Controller;
use App\Http\Requests\CompanyRequest;
use App\Models\Company;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;

class CompanyController extends Controller
{

    public function index(): \Illuminate\Database\Eloquent\Relations\HasMany|\Illuminate\Http\JsonResponse
    {
        try {
            return response()->json([
                "companies" => User::query()->findOrFail(Auth::id())->companies()->get(),
                "status" => "success",
                "message" => "All companies has been fetched successfully",
            ]);
        }
        catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ]);
        }
    }
    public function store(CompanyRequest $request): \Illuminate\Http\JsonResponse
    {
        try {
            $validatedData = $request->validated();
            Company::query()->create($validatedData);
            return response()->json([
                'status' => 'success',
                'message' => "{$validatedData['name']} has been created successfully"
            ]);
        }
        catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ]);
        }
    }
    public function show(string $id)
    {
        //
    }
    public function update(CompanyRequest $request, string $id): \Illuminate\Http\JsonResponse
    {
        try {
            $validatedData = $request->validated();
            Company::query()->updateOrCreate(["id" => $id],$validatedData);
            return response()->json([
                'data' => $validatedData,
                'status' => 'success',
                'message' => "{$validatedData['name']} has been updated successfully"
            ]);
        }
        catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ]);
        }
    }
    public function destroy(string $id): \Illuminate\Http\JsonResponse
    {
        try {
            $company = Company::query()->findOrFail($id);
            $name = $company->name;
            $company->delete();
            return response()->json([
                'status' => 'success',
                'message' => "{$name} has been deleted successfully"
            ]);
        }
        catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ]);
        }
    }
}
