<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\User;
use DB;

class ActivateUsers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'activate:users';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $statusBlock = DB::table('users')->where('status','=',0)->first();
        if(isset($statusBlock)){
            $user = User::where('status','=',0)->first();
            $user->status = 1;
            $user->update();
        }
    }
}
