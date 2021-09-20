<table>
    <thead>
    <tr>
        <th>Logro</th>
        <th>Indicadores</th>
         <th>Contenido</th>
        <th>Actividades</th>
    </tr>
    </thead>
    <tbody>
    @foreach($users as $user)
        <tr>
            <td>{{ $user->name }}</td>
            <td>{{ $user->last_name }}</td>
             <td>{{ $user->id_number }}</td>
            <td>{{ $user->email }}</td>
        </tr>
    @endforeach
    </tbody> 
</table>