<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FoodComponent extends Model
{
    protected $table = 'food_components';
    protected $guarded = ['id'];
    protected $fillable = [
        'name_student',
        'diet',
        'observation'
    ];
}
