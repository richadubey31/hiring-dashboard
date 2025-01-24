<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('job_listings', function (Blueprint $table) {
            $table->id();
            $table->string('title');  // Job title
            $table->text('description')->nullable();  // Job description
            $table->string('location');  // Job location
            $table->string('category');  // Job category (e.g., Software Development)
            $table->string('company_name');  // Name of the company
            $table->string('employment_type');  // Full-time, Part-time, etc.
            $table->timestamps();  // created_at and updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_listings');
    }
};
