<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class HouseFile extends Model
{
    protected static function booting(): void
    {
        static::creating(function ($houseFile) {
            $houseFile->userId = auth()->id();
        });
        static::created(function ($houseFile) {
            $houseFile->company()->update(["fileID" => $houseFile->fileId]);
        });
        static::updated(function ($houseFile) {
            $houseFile->company()->update(["fileID" => $houseFile->fileId]);
        });
    }
    use softDeletes;
    protected $table = "house_files";
    protected $fillable = ["userId","companyId","fileId","clientFirstName","clientLastName","clientPhone","clientEmail","street","unit","city","region","postalCode","pdfReady","h2kReady","imagesReady","status","notes"];

    protected $appends = ["clientName"];

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class,"userId");
    }
    public function company(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Company::class,"companyId");
    }

    public function getClientNameAttribute(): string
    {
        return "$this->clientFirstName $this->clientLastName";
    }
}
