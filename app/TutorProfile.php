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
        'document',
        'description',
        'picture',
        'background_information',
        'twitter_profile',
        'facebook_profile',
        'instagram_profile',
        'linkedin_profile',
        'country',
        'city',
        'address',
        'phone',
        'email',
        'education_information',
        'experience_education',
        'certification',
        'recommendation',
        'class_offer',
        'key_words',
        'user_id'
    ];
}
