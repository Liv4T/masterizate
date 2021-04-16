<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEffectivenessesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('effectivenesses', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('teacher_id');
            $table->bigInteger('student_id');
            $table->string('course');
            $table->bigInteger('score_effectiveness');
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
        Schema::dropIfExists('effectivenesses');
    }
}
