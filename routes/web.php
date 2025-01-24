<?php
use App\Http\Controllers\PublicController;
use App\Http\Controllers\HRController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\SseController;
use App\Http\Controllers\AuthController;

// Public routes
Route::get('/', [PublicController::class, 'index']); // Homepage
Route::post('/apply', [PublicController::class, 'store']); // Handle job applications
Route::post('/admin', [AuthController::class, 'login']);


// SSE route
Route::get('/getData', [SseController::class, 'index']); // Fetch server-sent events (SSE)

// HR routes
Route::get('/dashboard', [HRController::class, 'index']); // Dashboard homepage
Route::get('/applications', [HRController::class, 'applications']); // View applications
Route::post('/applications/{id}/approve', [HRController::class, 'approve']); // Approve application
Route::post('/applications/{id}/reject', [HRController::class, 'reject']); // Reject application

//Job routes
Route::get('/jobs/search', [JobController::class, 'search']);
Route::get('/jobs/{id}', [JobController::class, 'show'])->name('jobs.show');
Route::get('/jobs', [JobController::class, 'index'])->name('jobs.index');


