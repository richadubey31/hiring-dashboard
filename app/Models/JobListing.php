<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobListing extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 
        'description', 
        'location', 
        'category', 
        'company_name', 
        'employment_type'
    ];
}
