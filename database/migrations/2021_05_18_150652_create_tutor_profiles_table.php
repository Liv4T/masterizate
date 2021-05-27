<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTutorProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tutor_profiles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('last_name');
            $table->string('document');
            $table->text('description');
            $table->string('picture');
            $table->string('background_information');
            $table->string('twitter_profile')->nullable();
            $table->string('facebook_profile')->nullable();
            $table->string('instagram_profile')->nullable();
            $table->string('linkedin_profile')->nullable();
            $table->string('country');
            $table->string('city');
            $table->string('address');
            $table->string('phone');
            $table->json('education_information');
            $table->json('experience_education');
            $table->json('certification');
            $table->json('recommendation');
            $table->json('class_offer');
            $table->json('key_words');
            $table->integer('user_id');
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
        Schema::dropIfExists('tutor_profiles');
    }
}
