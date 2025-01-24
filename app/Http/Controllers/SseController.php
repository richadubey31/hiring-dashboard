<?php

namespace App\Http\Controllers;

use Symfony\Component\HttpFoundation\StreamedResponse;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SseController extends Controller
{
    public function index()
    {
        $response = new StreamedResponse(function () {
            $data = json_encode(['message' => 'This is a message']);
            echo "data: $data\n\n";

            ob_flush();
            flush();
        });

        $response->headers->set('Content-Type', 'text/event-stream');
        $response->headers->set('Cache-Control', 'no-cache');
        $response->headers->set('Connection', 'keep-alive');

        return $response;
    }
}
