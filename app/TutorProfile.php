<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TutorProfile extends Model
{
    protected $table = 'tutor_profiles';
    protected $guarded = ['id'];
    protected $fillable = [
        'name',
        'last_name',
        'id_number',
        'description',
        'picture',
        'twitter_profile',
        'facebook_profile',
        'instagram_profile',
        'linkedin_profile',
        'country',
        'city',
        'address',
        'phone',
        'section_education',
        'section_experience',
        'documento_certificacion',
        'documento_recomendacion',
        'classes',
        'keywords',
        'user_id',
    ];
}
