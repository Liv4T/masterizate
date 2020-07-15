<?php

namespace App\Http\Controllers;

use App\Book;
use App\Imports\bookImport;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

class ImportController extends Controller
{
    public function import()
    {
        // \Excel::import('book.csv', function ($reader) {

        //     foreach ($reader->get() as $book) {
        //         Book::create([
        //             'name' => $book->title,
        //             'author' => $book->author,
        //             'year' => $book->publication_year
        //         ]);
        //     }
        // });

        Excel::import(new bookImport, 'book.xlsx');

        // return redirect('/')->with('success', 'File imported successfully!');
        return redirect('/importar_adm')->with('success', 'All good!');
    }
}
