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
        'description',
        'id_number',
        'document',
        'picture',
        'address',
        'phone',
        'twitter_profile',
        'facebook_profile',
        'instagram_profile',
        'linkedin_profile',
        'country',
        'city',
        'education_information',
        'experience_education',
        'certification',
        'recommendation',
        'class_offer',
        'key_words',
    ];
}
