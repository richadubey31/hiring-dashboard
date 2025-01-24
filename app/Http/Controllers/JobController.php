<?php

namespace App\Http\Controllers;

use App\Models\JobListing;
use Illuminate\Http\Request;

class JobController extends Controller
{
    public function index(Request $request)
    {
        $query = JobListing::query();

        if ($request->has('keyword') && $request->keyword != '') {
            $query->where('title', 'like', '%' . $request->keyword . '%');
        }

        if ($request->has('city') && $request->city != '') {
            $query->where('location', 'like', '%' . $request->city . '%');
        }

        if ($request->has('category') && $request->category != '') {
            $query->where('category', 'like', '%' . $request->category . '%');
        }

        $jobs = $query->paginate(10); 

        return response()->json($jobs);
    }

    public function show($id)
    {
        $job = JobListing::findOrFail($id);
        return response()->json($job);
    }
}
