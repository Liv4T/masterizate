@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
      <div class="card-body"> @if (session('status'))
        <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
      </div>
    </div>  
    <div >
        <div class="">
            <div id="crud" class="col-xl-12">
                <div class="card">
                    <h1 class="card-header">Clase</h1>
                    <div class= "card-body">
         <div >
             <a href="#" class="btn btn-primary float-right" data-toggle="modal" data-target="#createu">Nueva Clase</a>
             <table class="table table-hover table-striped">
                 <thead>
                     <tr>
                         <th>N°</th>
                         <th>Semana</th>
                         <th>Nombre</th>
                         <th>Categoria</th>
                         <th>Tema</th>
                         <th>Objetivo</th>
                         <th>Indicador</th>
                         <th>%</th>
                         <th>Medicion</th>
                         
                         <th colspan="2">
                             &nbsp;
                         </th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr >
                         <td width="10px">1</td>
                         <td>15/03/2019-22/03/2019</td>
                         <td>zsfdffxgdfh</td>
                         <td>Matematica</td>
                         <td>Matematica 1</td>
                         <td>Ecuaciones</td>
                         <td>dsfdsfrf sfrfgsdffds</td>
                         <td width="10px">20</td>
                         <td>Quiz</td>
                         <td width="10px">
                             <a href="#" class="btn btn-warning btn-sm" >/</a>
                         </td>
                         <td width="10px">
                             <a href="#" class="btn btn-danger btn-sm" >-</a>
                         </td>
                     </tr>
                     <tr >
                        <td width="10px">1</td>
                        <td>15/03/2019-22/03/2019</td>
                        <td>zsfdffxgdfh</td>
                        <td>Matematica</td>
                        <td>Matematica 1</td>
                        <td>Ecuaciones</td>
                        <td>dsfdsfrf sfrfgsdffds</td>
                        <td width="10px">20</td>
                        <td>Quiz</td>
                        <td width="10px">
                            <a href="#" class="btn btn-warning btn-sm" >/</a>
                        </td>
                        <td width="10px">
                            <a href="#" class="btn btn-danger btn-sm" >-</a>
                        </td>
                    </tr>
                    <tr >
                        <td width="10px">1</td>
                        <td>15/03/2019-22/03/2019</td>
                        <td>zsfdffxgdfh</td>
                        <td>Matematica</td>
                        <td>Matematica 1</td>
                        <td>Ecuaciones</td>
                        <td>dsfdsfrf sfrfgsdffds</td>
                        <td width="10px">20</td>
                        <td>Quiz</td>
                        <td width="10px">
                            <a href="#" class="btn btn-warning btn-sm" >/</a>
                        </td>
                        <td width="10px">
                            <a href="#" class="btn btn-danger btn-sm" >-</a>
                        </td>
                    </tr>
                    <tr >
                        <td width="10px">1</td>
                        <td>15/03/2019-22/03/2019</td>
                        <td>zsfdffxgdfh</td>
                        <td>Matematica</td>
                        <td>Matematica 1</td>
                        <td>Ecuaciones</td>
                        <td>dsfdsfrf sfrfgsdffds</td>
                        <td width="10px">20</td>
                        <td>Quiz</td>
                        <td width="10px">
                            <a href="#" class="btn btn-warning btn-sm" >/</a>
                        </td>
                        <td width="10px">
                            <a href="#" class="btn btn-danger btn-sm" >-</a>
                        </td>
                    </tr>
                 </tbody>
             </table>
         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
    </div>
</div>
@endsection