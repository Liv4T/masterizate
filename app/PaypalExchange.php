<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PaypalExchange extends Model
{
    protected $table = 'paypal_exchange';
    protected $fillable = [
        'currency', 'institution_id', 'exchange'
    ];
}
