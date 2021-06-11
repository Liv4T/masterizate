<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PIARClasses extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('p_i_a_r_classes', function (Blueprint $table) {
            $table->increments('id');
            $table->longText('activities');
            $table->longText('content');
            $table->longText('description');
            $table->longText('hourly_intensity');
            $table->string('name');
            $table->boolean('state');
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
        //
    }
}
