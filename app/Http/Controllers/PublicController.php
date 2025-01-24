<?php

namespace App\Http\Controllers;

use App\Mail\ApplicationReceived; // To use the Mailable
use Illuminate\Support\Facades\Mail; // To send the email
use Illuminate\Http\Request;
use App\Models\Application;

class PublicController extends Controller
{
    public function index(Request $request)
    {
        // Get the job_designation from the query string
        $jobDesignation = $request->query('job_designation', '');
    
        // Show the job application form with the pre-filled job designation
        return view('public.apply', ['jobDesignation' => $jobDesignation]);
    }
    

    public function store(Request $request)
    {
        // Validate the request
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'required|string|max:15',
            'job_designation' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'college' => 'required|string|max:255',
            'graduation_year' => 'required|digits:4',
            'resume' => 'required|file|mimes:pdf|max:2048',
        ]);
    
        // Handle resume upload
        $resumePath = $request->file('resume')->store('resumes', 'public');
    
        // Save the application in the database
        $application = Application::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'job_designation' => $validated['job_designation'],
            'city' => $validated['city'],
            'college' => $validated['college'],
            'graduation_year' => $validated['graduation_year'],
            'resume' => $resumePath,
        ]);
    
        // Send email to the applicant
        Mail::to($application->email)->send(new ApplicationReceived());
    
        // Log the email sending
        \Log::info("Application received email sent to {$application->email}");
    
        // Return a thank-you view
        return view('public.thankyou');
    }
    
}
