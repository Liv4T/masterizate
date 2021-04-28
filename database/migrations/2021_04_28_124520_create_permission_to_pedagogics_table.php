<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePermissionToPedagogicsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('permission_to_pedagogics', function (Blueprint $table) {
            $table->increments('id');
            $table->string('pedagogical_activity');
            $table->bigInteger('pedagogical_id');
            $table->bigInteger('id_student');
            $table->bigInteger('parent_id');
            $table->string('permission');
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
        Schema::dropIfExists('permission_to_pedagogics');
    }
}
