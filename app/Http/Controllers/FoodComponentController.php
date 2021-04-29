<?php

namespace App\Http\Controllers;

use App\FoodComponent;
use Illuminate\Http\Request;

class FoodComponentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('foodComponent');
    }

    public function getFoodInformation(){
        $food = FoodComponent::all();
        return response()->json($food);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newFood = new FoodComponent();
        $newFood->name_student = $request->name_student;
        $newFood->diet = $request->diet;
        $newFood->observation = $request->observation;

        $newFood->save();
        return response()->json('Dato de Alimento Guardado');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\FoodComponent  $foodComponent
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $updateFood = FoodComponent::findOrFail($id);
        $updateFood->name_student = $request->name_student;
        $updateFood->diet = $request->diet;
        $updateFood->observation = $request->observation;

        $updateFood->update();
        return response()->json('Dato de Alimento Actualizado');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\FoodComponent  $foodComponent
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deleteFood = FoodComponent::findOrFail($id);
        $deleteFood->delete();
        return response()->json('Dato de Alimento Eliminado');
    }
}
