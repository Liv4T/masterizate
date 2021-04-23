<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePedagogicalCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedagogical_courses', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name_activity');
            $table->string('grade');
            $table->string('place');
            $table->dateTime('departure_time');
            $table->dateTime('time_arrival');
            $table->string('description');
            $table->char('permission');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pedagogical_courses');
    }
}
