<table>
    <thead>
    <tr>


         <th>Salón</th>
         <th>Nombre</th>
         <th>Apellido</th>
         <th>Materia</th>
         <th>Ciclo</th>
         <th>Clase</th>
         <th>Descripción</th>
         <th>Recurso</th>
         {{-- <th>Enlace</th>
         <th>Descripción del enlace</th> --}}
         <th>Fecha de creación</th>
    </tr>
    </thead>
    <tbody>

    @foreach($datos as $data)
        <tr>
            <td>{{ $data->classroom_name }}</td>
            <td>{{ $data->user_name }}</td>
            <td>{{ $data->user_lastname }}</td>
            <td>{{ $data->area }}</td>
            <td>{{ $data->cicle }}</td>
            <td>{{ $data->class_name }}</td>
            <td>{{ $data->class_description }}</td>
            <td>
                @foreach ($data->content as $content)
                        @isset($content['content_type'])
                            <strong>Tipo de contenido: </strong>{{ $content['content_type'] }}<br>
                        @endisset
                        @isset($content['content'])
                            <strong>Contenido: </strong>{{ $content['content'] }}<br>
                        @endisset
                        @isset($content['description'])
                            <strong>Descripcion: </strong>{{ $content['description'] }}<br>
                        @endisset
                @endforeach
            </td>
            <td>{{ $data->date }}</td>
        </tr>
    @endforeach
    </tbody>
</table>
