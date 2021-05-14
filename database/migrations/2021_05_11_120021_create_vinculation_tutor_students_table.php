<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVinculationTutorStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vinculation_tutor_students', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('id_tutor');
            $table->bigInteger('id_student');
            $table->string('code_vinculated');
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
        Schema::dropIfExists('vinculation_tutor_students');
    }
}
