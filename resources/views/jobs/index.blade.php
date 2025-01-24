<!-- resources/views/jobs/index.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Job Listings</title>
</head>
<body>
    <h1>Job Listings</h1>
    
    @foreach($jobs as $job)
        <div>
            <h3><a href="{{ route('jobs.show', $job->id) }}">{{ $job->job_title }}</a></h3>
            <p>{{ $job->location }} | {{ $job->category }}</p>
        </div>
    @endforeach

    <div>
        {{ $jobs->links() }}  <!-- Pagination links -->
    </div>
</body>
</html>
