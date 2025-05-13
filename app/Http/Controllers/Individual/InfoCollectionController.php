<?php

namespace App\Http\Controllers\Individual;

use App\Http\Controllers\Controller;
use App\Http\Requests\Individual\CompanyRequest;
use App\Http\Requests\InfoCollectionRequest;
use App\Models\Company;
use App\Models\InfoCollection;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;

class InfoCollectionController extends Controller
{
    public function index(): \Illuminate\Database\Eloquent\Relations\HasMany|\Illuminate\Http\JsonResponse
    {
        try {
            return response()->json([
                "infoCollections" => User::query()->findOrFail(Auth::id())->infoCollections()->get(),
                "status" => "success",
                "message" => "All info collections has been fetched successfully",
            ]);
        }
        catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ]);
        }
    }
    public function store(InfoCollectionRequest $request): \Illuminate\Http\JsonResponse
    {
        try {
            $validatedData = $request->validated();
            InfoCollection::query()->create($validatedData);
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
            $infoCollection = InfoCollection::query()->findOrFail($id);
            $name = $infoCollection->name;
            $infoCollection->delete();
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
