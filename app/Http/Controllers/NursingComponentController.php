<?php

namespace App\Http\Controllers;

use App\NursingComponent;
use Illuminate\Http\Request;

class NursingComponentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('nursingComponent');
    }

    public function getNursignData(){
        $nursing = NursingComponent::all();
        return response()->json($nursing);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $createNursing = new NursingComponent();
        $createNursing->id_course = $request->id_course;
        $createNursing->course = $request->course;
        $createNursing->id_student = $request->id_student;
        $createNursing->student = $request->student;
        $createNursing->alergies = $request->alergies;
        $createNursing->diet = $request->diet;
        $createNursing->observation = $request->observation;
        $createNursing->blood_rh = $request->blood_rh;
        $createNursing->save();
        return response()->json("Datos de Enfermeria Creado");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\NursingComponent  $nursingComponent
     * @return \Illuminate\Http\Response
     */
    public function show(NursingComponent $nursingComponent)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\NursingComponent  $nursingComponent
     * @return \Illuminate\Http\Response
     */
    public function edit(NursingComponent $nursingComponent)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\NursingComponent  $nursingComponent
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $updateNursing = NursingComponent::findOrFail($id);
        $updateNursing->id_course = $request->id_course;
        $updateNursing->course = $request->course;
        $updateNursing->id_student = $request->id_student;
        $updateNursing->student = $request->student;
        $updateNursing->alergies = $request->alergies;
        $updateNursing->diet = $request->diet;
        $updateNursing->observation = $request->observation;
        $updateNursing->blood_rh = $request->blood_rh;
        $updateNursing->update();
        return response()->json("Datos de enfermeria actualizado");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\NursingComponent  $nursingComponent
     * @return \Illuminate\Http\Response
     */
    public function destroy(NursingComponent $nursingComponent)
    {
        $updateNursing = NursingComponent::findOrFail($id);
        $updateNursing->delete();
        return response()->json("Dato de Enfermeria Eliminado");
    }
}
