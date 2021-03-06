<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Answers extends Model
{
    // morphed many to many relationship with votables pivot table
    // -----------------------------------------------------------

    use VotableTrait;

    // -------------------------------------------------------------

    protected $table = "answers";
    protected $fillable = [
        'que_id',
        'user_id',
        'body',
        'votes_count'
    ];

    public function question()
    {
        return $this->belongsTo(Question::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
