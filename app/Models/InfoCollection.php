<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InfoCollection extends Model
{
    protected static function booting(): void
    {
        static::creating(function ($infoCollection) {
            $infoCollection->user_id = auth()->id();
        });
    }

    protected $table = 'info_collections';
    protected $fillable = ["user_id","name","collection","default"];
    protected $appends = ["collection_array"];

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function getCollectionArrayAttribute()
    {
        return json_decode($this->collection,true);
    }
}
