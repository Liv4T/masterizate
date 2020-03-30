<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Response;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return 1;   
        return view('home');
    }

    public function savePrintDoc(Request $request)
    {
        // dd($request->dataBoard);
        // $phpWord = new \PhpOffice\PhpWord\PhpWord();
        // $section = $phpWord->addSection();
        // // $text = $section->addText($request->get('dataBoard'));
        // $text = $section->addText(
        //     htmlspecialchars(
        //         $request->get('dataBoard')
        //     )
        //    );
        // $objWriter = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord, 'Word2007');
        // header('Content-Type: text/html');
        // $objWriter->save('example_doc2.docx');

        $content = $request->get('dataBoard');

        $phpWord = new \PhpOffice\PhpWord\PhpWord();
        $section = $phpWord->addSection();

        $section->addText('');

        \PhpOffice\PhpWord\Shared\Html::addHtml($section, 
        "<html>
        <head>
        <style>
        h2{
            font-size: 1.5em; 
            font-weight: bolder;
            color: #FF0000;
        }
        </style>
        </head>
        <body>
        $content
        </body>
        </html>
        ", true, true);

        header('Content-Type: text/html');
        header("Content-disposition: attachment; filename=" . date("Y-m-d") . ".docx");

        $objectWriter = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord, 'Word2007');
        $objectWriter->save('example_doc3.docx');
    }
}

