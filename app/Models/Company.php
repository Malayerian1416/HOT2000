<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Company extends Model
{
    protected static function booting(): void
    {
        static::creating(function ($company) {
            $company->user_id = auth()->id();
        });
    }

    protected $table = 'companies';
    protected $fillable = ["user_id","name","fileID","email","phone","default","description"];

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
