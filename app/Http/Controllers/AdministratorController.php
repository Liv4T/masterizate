<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Institution;
use App\Section;
use App\Period;
use App\Grade;
use App\Classroom;
use App\Area;
use App\City;
use App\State;
use App\User;
use Auth;

class AdministratorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAllState()
    {
        $departamentos = State::all();

        return $departamentos;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function findCity(String $id)
    {
        $municipios = [];
        $Municipios = City::where('id_state', $id)->get();
        foreach ($Municipios as $key => $value) {
            $municipios[$key + 1] = [
                'id'   => $value->id_state,
                'text' => $value->name,
            ];
        };

        $data = [];
        $data = [
            'states' => $municipios,
        ];

        return $municipios;
    }

    /**
     *Create and store new institutotion resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function createInstitution(Request $request)
    {
        $data = $request->all();
        $institution = new Institution;
        $user = Auth::user();

        /* Save the new institution */
        $institution->id_user = $user->id;
        $institution->name = $data['name'];
        $institution->state = $data['state'];
        $institution->city = $data['city'];
        $institution->address = $data['address'];
        $institution->streaming = $data['streaming'];
        $institution->year = $data['year'];
        $institution->save();

        /* Save the new section */
        $sections = $data['sections'];

        foreach ($sections as $index => $section) {
            $sectiones = Section::create([
                'name' => $section['name'],
                'id_institution' => $institution->id,
            ]);
        }

        /* Save the new period */
        $periods = $data['periods'];

        foreach ($periods as $index => $period) {
            $periodos = Period::create([
                'name' => $period['name'],
                'date_from' => $period['date_from'],
                'date_to' => $period['date_to'],
                'id_institution' => $institution->id,
            ]);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function findInstitution(String $id)
    {
        $sections = [];
        $periods = [];
        $institution = Institution::findOrFail($id);
        $Sections = Section::where('id_institution', $id)->get();
        foreach ($Sections as $key => $value) {
            $sections[$key + 1] = [
                'id'   => $value->id,
                'name' => $value->name,
                'id_institution' => $id,
            ];
        };
        $Periodos = Period::where('id_institution', $id)->get();
        foreach ($Periodos as $key => $value) {
            $periods[$key + 1] = [
                'id'   => $value->id,
                'name' => $value->name,
                'date_to' => $value->date_to,
                'date_from' => $value->date_from,
                'id_institution' => $id,
            ];
        };

        $data = [];
        $data = [
            'institution' => $institution,
            'sections' => $sections,
            'periods' => $periods,
        ];

        return $data;
    }


    /**
     *Create and store new institutotion resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function updateInstitution(Request $request)
    {
        $data = $request->all();
        $institution = Institution::findOrFail($data['id_institution']);
        $user = Auth::user();

        /* Save the new institution */
        $institution->id_user = $user->id;
        $institution->name = $data['name'];
        $institution->state = $data['state'];
        $institution->city = $data['city'];
        $institution->address = $data['address'];
        $institution->streaming = $data['streaming'];
        $institution->year = $data['year'];
        $institution->save();

        /* Save the new section */
        $sections = $data['sections'];

        foreach ($sections as $sec) {

            $section = Section::findOrFail($sec['id']);

            $section->name = $sec['section'];
            $section->id_institution = $institution->id;
            $section->save();
        }


        /* Save the new period */
        $periods = $data['periods'];

        foreach ($periods as $per) {

            $period = Period::findOrFail($sec['id']);

            $period->name = $per['name'];
            $period->date_from = $per['date_from'];
            $period->date_to = $per['date_to'];
            $period->id_institution = $institution->id;
            $period->save();
        }
        return 'ok';
    }

    /**
     *Create and store new grade resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function createGrade(Request $request)
    {
        $data = $request->all();
        $grade = new Grade;

        $section = Section::findOrFail($data['id_section']);

        /* Save the new institution */
        $grade->name = $data['name'];
        $grade->id_section = $section->id;
        $grade->id_institution = $section->id_institution;
        $grade->save();
    }


    /**
     *Create and store new grade resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function createClassroom(Request $request)
    {
        $data = $request->all();
        $class = new Classroom;

        $grade = Grade::findOrFail($data['id_grade']);

        /* Save the new institution */
        $class->name = $data['name'];
        $class->id_section = $grade->id;
        $class->id_institution = $grade->id_institution;
        $class->save();
    }

    /**
     *Create and store new grade resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function createArea(Request $request)
    {
        $data = $request->all();
        $area = new Area;

        $grade = Grade::findOrFail($data['id_grade']);

        /* Save the new institution */
        $area->name = $data['name'];
        $area->id_section = $grade->id;
        $area->id_institution = $grade->id_institution;
        $area->save();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
