<!-- Define el menu del aplicativo -->
@if (Auth::user()->isAdmin())
<menu-adm></menu-adm>
@endif

@if (Auth::user()->isTeacher())
<menu-docente></menu-docente>
@endif

@if (Auth::user()->isStudent())
<menu-lateral></menu-lateral>
@endif

@if(Auth::user()->isParent())
<menu-padres></menu-padres>
@endif

@if (Auth::user()->isPsychology())
<menu-psychology></menu-psychology>
@endif

@if(Auth::user()->isSchoolGovernment())
<menu-school></menu-school>
@endif

@if(Auth::user()->isTutor())
<menu-tutor></menu-tutor>
@endif

@if(Auth::user()->isCoordinator())
<menu-coord></menu-coord>
@endif

@if(Auth::user()->isNurse())
<menu-nurse></menu-nurse>
@endif

