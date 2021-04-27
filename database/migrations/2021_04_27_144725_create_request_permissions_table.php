<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRequestPermissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('request_permissions', function (Blueprint $table) {
            $table->increments('id');
            $table->string('cicle')->unique();
            $table->integer('id_cicle');
            $table->integer('id_area');
            $table->integer('id_classroom');
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
        Schema::dropIfExists('request_permissions');
    }
}
