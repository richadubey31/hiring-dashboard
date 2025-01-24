<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\JobListing;

class JobSeeder extends Seeder
{
    public function run()
    {
        JobListing::create([
            'title' => 'Senior Software Engineer',
            'description' => 'Develop and maintain software solutions.',
            'location' => 'Bangalore, Karnataka, India',
            'category' => 'Software Development',
            'company_name' => 'TechCorp',
            'employment_type' => 'Full-time',
        ]);

        JobListing::create([
            'title' => 'Data Engineer',
            'description' => 'Build and optimize data pipelines.',
            'location' => 'Chennai, Tamil Nadu, India',
            'category' => 'Data Engineering',
            'company_name' => 'Data Solutions Ltd.',
            'employment_type' => 'Full-time',
        ]);

        // Add more dummy job entries as needed...
    }
}

