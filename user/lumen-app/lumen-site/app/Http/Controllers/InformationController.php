<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\InformationModel;

class InformationController extends Controller
{
    function onSelectAll(){
        
        $result = InformationModel::all();
        return $result;
        
    }
}
