<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ApplicationReceived extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Build the message.
     */
    public function build()
    {
        \Log::info('Sending Application Received Email');
        return $this->subject('Application Received')
                    ->view('emails.application_received')  // Ensure this view exists
                    ->from('no-reply@gethired.com', 'GetHired');
    }
}
