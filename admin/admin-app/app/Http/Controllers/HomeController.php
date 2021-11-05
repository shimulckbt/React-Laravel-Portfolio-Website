<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\HomeEtcModel;
class HomeController extends Controller
{
    function HomeItem(){
        $result = HomeEtcModel::all();
        return $result;
    }
}
