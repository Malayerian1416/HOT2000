<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EnglishWord extends Model
{
    protected $table = 'english_words';
    protected $fillable = ['word'];
}
