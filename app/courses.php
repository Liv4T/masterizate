<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class courses extends Model
{
     protected $fillable =['name','description','id_user','id_category','id_subcategory','intensityAC','intensityTA','methodology','methodologyG','welcome','presentation','intention','competences','achievement','indicatorA','map','type','descriptionO', 'state', 'publish'];
      
}
