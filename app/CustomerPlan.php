<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomerPlan extends Model
{
    protected $table = 'customer_plans';
    protected $fillable = ['name','grade','price','state'];
}
