<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ClientReviewModel;
class ReviewController extends Controller
{
    function ClientReviewList(){
        $result = ClientReviewModel::all();
        return $result;
    }

    function ClientReviewDelete(Request $request){
        $id = $request->input('id');
        $result = ClientReviewModel::where('id','=',$id)->delete();
        return $result;
    }
}
