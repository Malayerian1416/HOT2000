<?php

namespace App\Http\Controllers\Individual;

use App\Http\Controllers\Controller;
use App\Http\Requests\HouseFileRequest;
use App\Models\Company;
use App\Models\HouseFile;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HouseFileController extends Controller
{
    public function index(): \Illuminate\Http\JsonResponse
    {
        try {
            return response()->json([
                "houseFiles" => User::query()->findOrFail(Auth::id())->houseFiles()->with(["company","user"])->get(),
                "companies" => User::query()->findOrFail(Auth::id())->companies()->get(),
                "status" => "success",
                "message" => "All House Files has been fetched successfully",
            ]);
        }
        catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function store(HouseFileRequest $request): \Illuminate\Http\JsonResponse
    {
        try {
            $validatedData = $request->validated();
            HouseFile::query()->create($validatedData);
            return response()->json([
                'status' => 'success',
                'message' => "House file id {$validatedData['fileId']} has been created successfully"
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

    public function update(HouseFileRequest $request, string $id): \Illuminate\Http\JsonResponse
    {
        try {
            $validatedData = $request->validated();
            HouseFile::query()->updateOrCreate(["id" => $id],$validatedData);
            return response()->json([
                'data' => $validatedData,
                'status' => 'success',
                'message' => "House file id {$validatedData['fileId']} has been updated successfully"
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
            $houseFile = HouseFile::query()->findOrFail($id);
            $fileId = $houseFile->fileId;
            $houseFile->delete();
            return response()->json([
                'status' => 'success',
                'message' => "House file id {$fileId} has been deleted successfully"
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
