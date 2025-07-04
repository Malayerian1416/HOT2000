<?php

namespace App\Http\Controllers\Individual;

use App\Http\Controllers\Controller;
use App\Models\HouseFile;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuditionController extends Controller
{
    public function index($id): \Illuminate\Http\JsonResponse
    {
        try {
            return response()->json([
                "houseFile" => HouseFile::query()->with(["user","company"])->findOrFail($id),
                "companies" => User::query()->findOrFail(Auth::id())->companies()->get(),
                "status" => "success",
                "message" => "House File has been fetched successfully",
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
