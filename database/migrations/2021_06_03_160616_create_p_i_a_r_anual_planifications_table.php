<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePIARAnualPlanificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('p_i_a_r_anual_planifications', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_area');
            $table->integer('id_classroom');
            $table->longText('logros');
            $table->longText('trimestres');
            $table->longText('students');
            $table->integer('id_teacher');
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
        Schema::dropIfExists('p_i_a_r_anual_planifications');
    }
}
