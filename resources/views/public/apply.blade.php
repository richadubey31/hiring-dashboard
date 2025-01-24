<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Application</title>
    <link rel="stylesheet" href="{{ asset('css/application.css') }}">

</head>
<body>
    <h1>Submit your Application</h1>
    <form action="/apply" method="POST" enctype="multipart/form-data" style="max-width: 600px; margin: auto;">
    @csrf

    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <br>

    <label for="phone">Phone:</label>
    <input type="text" id="phone" name="phone" required>
    <br>

    <label for="job_designation">Job Designation:</label>
    <input
        type="text"
        id="job_designation"
        name="job_designation"
        value="{{ old('job_designation', $jobDesignation) }}"
        readonly="{{ $jobDesignation ? 'readonly' : '' }}"
        required
    >
    <br>

    <label for="city">City:</label>
    <input type="text" id="city" name="city" required>
    <br>

    <label for="college">College:</label>
    <input type="text" id="college" name="college" required>
    <br>

    <label for="graduation_year">Graduation Year:</label>
    <input type="number" id="graduation_year" name="graduation_year" required>
    <br>

    <label for="resume">Resume (PDF only, max 2MB):</label>
    <input type="file" id="resume" name="resume" required>
    <br>

    <button type="submit" style="margin-top: 20px;">Submit Application</button>
</form>

</body>
</html>
