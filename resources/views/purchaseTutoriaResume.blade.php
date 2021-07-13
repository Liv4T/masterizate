@extends('layouts.app')

@section('content')

<menu-cliente></menu-cliente>  
<purchase-tutorial-resume :tutor_schedule_student_id="'{{ $tutor_schedule_student_id }}'" :tutorschedule_id="'{{ $tutorschedule_id }}'"></purchase-tutorial-resume>
<footers></footers>
<div class="container">
    <div class="row justify-content-center">
      <div class="card-body"> @if (session('status'))
        <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
      </div>
    </div>
    </div> 
</div>
@endsection