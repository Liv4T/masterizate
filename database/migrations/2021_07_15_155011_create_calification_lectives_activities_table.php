<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCalificationLectivesActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calification_lectives_activities', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('id_lective_activity');
            $table->bigInteger('id_class');
            $table->bigInteger('id_teacher');
            $table->bigInteger('id_student');
            $table->bigInteger('calification');
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
        Schema::dropIfExists('calification_lectives_activities');
    }
}
