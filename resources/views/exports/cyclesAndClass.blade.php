<table class="table table-striped">
    <tbody>
    @foreach($dataWeek as $dataWeeks)
        <tr>
            <th>#</th>
            <th>Ciclo de aprendizaje</th>
            <th>Deserrollo de la clase</th>
            <th>Observación</th>
            <th>Ajustes PIAR</th>
        </tr>
        <tr>
            <td>{{ $dataWeeks['order_items'] }}</td>
            <td>{{ $dataWeeks['text'] }}</td>
            <td>{{ $dataWeeks['class'] }}</td>
            <td>{{ $dataWeeks['observation'] }}</td>
            <td>{{ $dataWeeks['ajuste_piar'] }}</td>
        </tr>
        <tr></tr>
        <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Objetivos</th>
            <th>Habilidades</th>
            <th>Tarea</th>
            <th>Link</th>
            <th>Fecha inicio</th>
            <th>Contenidos</th>
        </tr>
        @foreach($dataWeeks['class_array'] as $class)
            {{ $content = "" }}
            @foreach($class->content as $j => $v)
                
                {{ $content .=$j+1 .'- '.$v['content_type']. '- ' .$v['content']. ' ' }}

            @endforeach
        <tr>
            <td>{{ $class->name }}</td>
            <td>{{ $class->description }}</td>
            <td>{{ $class->objetivesClass }}</td>
            <td>{{ $class->transversals }}</td>
            <td>{{ $class->work }}</td>
            <td>{{ $class->url_class }}</td>
            <td>{{ $class->date_init_class }}</td>
            <td>{{ $content }}</td>
        </tr>
        @endforeach
    @endforeach
    </tbody> 
</table>