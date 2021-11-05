<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CourseTableModel;
class CourseController extends Controller
{
    function CoursetList(){
        $result = CourseTableModel::all();
        return $result;
    }

    function CourseDelete(Request $request){
        $id = $request->input('id');
        $result = CourseTableModel::where('id','=',$id)->delete();
        return $result;
    }
}
