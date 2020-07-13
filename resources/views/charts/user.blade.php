@extends('layouts.app')

@section('content')

{{-- <h1>Sales Graphs</h1> --}}

{{-- <div style="width: 50%">
    {!! $usersChart->container() !!}
</div> --}}

<div class="container">
    <h1>Users Graphs</h1>
    <div class="row">
        <div class="col-6">
            <div class="card rounded">
                <div class="card-body py-3 px-3">
                    {!! $usersChart->container() !!}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

