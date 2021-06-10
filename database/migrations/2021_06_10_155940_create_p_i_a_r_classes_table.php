<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePIARClassesTable extends Migration
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
            $table->longText('description'); 
            $table->string('name'); 
            $table->string('name_document');
            $table->longText('document'); 
            $table->longText('document1'); 
            $table->longText('document2'); 
            $table->longText('url'); 
            $table->longText('url1'); 
            $table->longText('url2'); 
            $table->longText('video'); 
            $table->longText('video1'); 
            $table->longText('video2'); 
            $table->bigInt('id_weekly_plan'); 
            $table->bigInt('hourly_intensity');
            $table->string('activity_quantity');
            $table->string('content_quantity');
            $table->string('state');
            $table->timestamp('updated_user');
            $table->timestamp('deleted');
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
        Schema::dropIfExists('p_i_a_r_classes');
    }
}
