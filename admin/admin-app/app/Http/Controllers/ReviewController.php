<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ClientReviewModel;
class ReviewController extends Controller
{
    function ReviewList(){
        $result = ClientReviewModel::all();
        return $result;
    }

    function ReviewDelete(Request $request){
        $id = $request->input('id');
        $result = ClientReviewModel::where('id','=',$id)->delete();
        return $result;
    }
}
