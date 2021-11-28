<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ServiceModel;

class ServiceController extends Controller
{
    function onSelectAll(){
        
        $result = ServiceModel::all();
        return $result;
        
    }
}
