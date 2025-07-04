<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use function PHPUnit\Framework\isNumeric;

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
    protected $appends = ["nextFileId"];

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function HouseFiles(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(HouseFile::class, 'companyId');
    }
    public function getNextFileIdAttribute(): string
    {
        return str_increment($this->fileID);
    }
}
