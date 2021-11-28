<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\HomeEtcModel;

class HomeEtcController extends Controller
{
    function onSelectVideo(){
        
        $result = HomeEtcModel::select('video_description','video_url')->get();
        return $result;
        
    }

    function onSelectTotalProjectClient(){
        
        $result = HomeEtcModel::select('total_projects','total_clients')->get();
        return $result;
        
    }

    function onSelectTechDescription(){
        
        $result = HomeEtcModel::select('tech_description')->get();
        return $result;
        
    }

    function onSelectHomeTopTitle(){
        
        $result = HomeEtcModel::select('home_title','home_subtitle')->get();
        return $result;
        
    }
}
