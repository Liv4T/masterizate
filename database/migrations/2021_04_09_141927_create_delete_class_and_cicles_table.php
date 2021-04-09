<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDeleteClassAndCiclesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('delete_class_and_cicles', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_class')->nullable();
            $table->integer('id_cicle')->nullable();
            $table->date('date_to_activate_btn');
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
        Schema::dropIfExists('delete_class_and_cicles');
    }
}
