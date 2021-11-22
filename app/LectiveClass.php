<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
class LectiveClass extends Model
{
    protected $table = 'lective_class';

    protected $fillable = ['description', 'name', 'name_document', 'document', 'document1', 'document2', 'url', 'video', 'id_lective_weekly_plan', 'hourly_intensity','activity_quantity','content_quantity','state','updated_user','deleted','activityForPIARStudents','activityForSelectStudents','activityForAllStudents','selectedStudents','url_class','date_init_class','transversals','work','objetivesClass'];
}
